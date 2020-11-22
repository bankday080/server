import { gql } from "apollo-server-express";
import { query } from "express";
import { formatError } from "graphql"

 const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    password: String!
    email: String!
  }

  type Query {
    user(id: ID): User
    users: [User]!
  }
`;

export default typeDefs;


