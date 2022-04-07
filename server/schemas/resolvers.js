const { AuthenticationError } = require("apollo-server-express");
const { User, Party, Rules } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent, args) => {
      return await User.find();
    },

    parties: async (parent, args) => {
      return await Party.find();
    },
    rules: async () => {},
    // chat: async () => {},
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addParty: async (parent, args, context) => {
      if (context.user) {
        const party = await Party.create(args);
        // console.log(context);
        await User.findByIdAndUpdate(context.user._id, {
          $push: { parties: party },
        });

        return party;
      }
      throw new AuthenticationError("Not logged in");
    },
    //TO DO
    // addRule: async (parent, args, context) => {};
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
