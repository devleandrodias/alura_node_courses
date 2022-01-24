import { gql } from "apollo-server";

// SDL Schema Definition Language

export const types = gql`
  type User {
    id: Int!
    name: String!
    active: Boolean!
    email: String
  }
`;
