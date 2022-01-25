import { gql } from "apollo-server";

// SDL - Schema Definition Language

export const types = gql`
  type User {
    id: ID!
    name: String!
    active: Boolean!
    email: String
    role: Role
  }

  type Role {
    id: ID!
    type: String!
  }
`;
