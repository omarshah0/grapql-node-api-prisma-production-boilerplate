// src/graphql/index.js

const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// schema
const bookSchema = require("./schema/bookSchema");
const bookResolver = require("./resolvers/bookResolver");

const server = new ApolloServer({
  typeDefs: [bookSchema],
  resolvers: [bookResolver],
  context: ({ req }) => {
    // You can add context initialization logic here if needed
  },
});
startStandaloneServer(server).then(({ url }) =>
  console.log(`🚀 Server ready at ${url}`)
);
