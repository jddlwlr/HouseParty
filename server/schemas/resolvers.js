const { AuthenticationError } = require("apollo-server-express");
const { User, Party, Rules } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent, args) => {
      return await User.find();
    },

    parties: async () => {},
    rules: async () => {},
    // chat: async () => {},
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addParty: async (parent, args) => {
      const party = await Party.create(args);

      return party;
    },
  },
};

module.exports = resolvers;
