import { gql } from "apollo-server-express";
import { formatError } from "graphql"

//Fake Database
const users =[
    {
        id: "1",
        name: "สมหญิง",
        username: "Somying",
        password: "123456",
        email: "somying11@gmail.com",
    },
    {
        id: "2",
        name: "สมชาย",
        username: "Somchai",
        password: "123457",
        email: "somchai11@gmail.com",
    },
    {
        id: "3",
        name: "สมศรี",
        username: "Somse",
        password: "123458",
        email: "somse11@gmail.com",
    },
    {
        id: "4",
        name: "สมปอง  ",
        username: "Sompong",
        password: "123458",
        email: "sompong11@gmail.com",
    },
    {
        id: "5",
        name: "สมรักษ์ ",
        username: "Somrunk",
        password: "123458",
        email: "somrunk11@gmail.com",
    },
];

export const resolvers = {
  Query: {
    user: (parent, arg, context, info) => {
        return users.filter((users) => user.id.toString()===args.id)[0];
        
    }, /*สำคัญ */
    users: (parent, arg, context, info) => {

    },
  },
};

export const typeDefs = gql`
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
