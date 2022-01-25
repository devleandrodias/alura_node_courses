import { gql } from "apollo-server";

export const query = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    roles: [Role]
  }

  type Mutation {
    addUser(
      name: String!
      active: Boolean!
      email: String!
      role: String!
    ): User!

    updateUser(
      id: ID!
      name: String!
      active: Boolean!
      email: String!
      role: String!
    ): User!

    deleteUser(id: ID!): ID!
  }
`;
