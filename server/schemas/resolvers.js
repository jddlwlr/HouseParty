const { AuthenticationError } = require("apollo-server-express");
const { User, Party, Rules } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    parties: async () => {},
    users: async () => {},
    rules: async () => {},
    chat: async () => {},
  },
};

module.exports = resolvers;
