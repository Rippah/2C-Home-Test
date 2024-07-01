const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startServer() {
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    formatError: (error) => {
      console.error('Server error:', error);
      return error;
    },
  });

  const { url } = await server.listen();
  console.log(`Server is ready on port: ${url}`);
}

startServer();