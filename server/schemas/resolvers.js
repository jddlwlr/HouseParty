const { AuthenticationError } = require("apollo-server-express");
const { isConstValueNode } = require("graphql");
const { User, Party, Rule } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent, args) => {
      return await User.find();
    },
    user: async (parent, args) => {
      return await User.findById(args);
    },

    parties: async (parent, args) => {
      return await Party.findById(args).populate("rules");
    },
    rules: async (parent, args) => {
      return await Rule.find(args);
    },
    party: async (parent, { _id }) => {
      const party = await Party.findById(_id).populate("rules");
      return party;
      // console.log({ ...party });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      console.log("New user added");
      return { token, user };
    },
    addParty: async (parent, args, context) => {
      if (context.user) {
        const party = await Party.create(args);

        await User.findByIdAndUpdate(context.user._id, {
          $push: { parties: party },
        });

        return party;
      }
      throw new AuthenticationError("Not logged in");
    },

    addRule: async (parent, { name, partyId }) => {
      const rule = await Rule.create({ name });

      await Party.findByIdAndUpdate(partyId, {
        $push: { rules: rule },
      });
      return rule;
    },
    // addUsers: async (parent, args, contect) => {};
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      console.log("you are logged in");
      return { token, user };
    },
  },
};

module.exports = resolvers;
