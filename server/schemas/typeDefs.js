const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    UID: String!
    currentRegimen: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`;

module.exports = typeDefs;

// type Mutation {
//   createUser(username: String!, email: String!, password: String!): User
// }