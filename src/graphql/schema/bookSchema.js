
// src/graphql/schema/bookSchema.js

const { gql } = require('apollo-server-express');

const bookSchema = gql`
  type Author {
    id: Int
    name: String
  }

  type Book {
    id: Int
    title: String
    published: Int
    author: Author
  }

  type Query {
    books(
      search: String
      author: String
      authorId: Int
      skip: Int
      take: Int
    ): [Book]
  }
`;

module.exports = bookSchema;
