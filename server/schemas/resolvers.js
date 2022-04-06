const { AuthenticationError } = require("apollo-server-express");
const { User, Party, Rules } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    parties: async () => {},
    users: async () => {},
    rules: async () => {},
    // chat: async () => {},
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
