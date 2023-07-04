// src/graphql/resolvers/bookResolver.js

const { getBooks } = require("../../db/models/book");

const bookResolver = {
  Query: {
    books: async (parent, args, context, info) => {
      return getBooks(args);
    },
  },
};

module.exports = bookResolver;
