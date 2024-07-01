const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users(filter: String): [User!]!
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
    deleteUser(id: ID!): User!
  }
`;

module.exports = typeDefs;
