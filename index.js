const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// Kreiranje Apollo Servera
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  formatError: (error) => {
    console.error('Server error:', error);
    return error;
  },
});

// Pokretanje servera
server.listen().then(({ url }) => {
  console.log(`Server is running on port: ${url}`);
});