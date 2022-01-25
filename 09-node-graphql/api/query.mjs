import { gql } from "apollo-server";

export const query = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    roles: [Role]
  }
`;
