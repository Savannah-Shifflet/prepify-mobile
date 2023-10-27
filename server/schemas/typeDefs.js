const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    UID: String!
    regimen: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(UID: String!, regimen: String!): User
    updateUser(id: Int, UID: String, regimen: String ): User
  }
`;

module.exports = typeDefs;