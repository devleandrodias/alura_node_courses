import { gql } from "apollo-server";

// SDL - Schema Definition Language

export const types = gql`
  type User {
    id: ID!
    name: String!
    active: Boolean!
    email: String
    role: Role
    createdAt: DateTime
  }

  input UserInput {
    name: String
    active: Boolean
    email: String
    role: RolesType
    createdAt: DateTime
  }

  interface BaseResult {
    code: Int!
    message: String!
  }

  type CreateUserResponse implements BaseResult {
    code: Int!
    message: String!
    user: User!
  }

  type UpdateUserResponse implements BaseResult {
    code: Int!
    message: String!
    user: User!
  }

  type DeleteUserResponse implements BaseResult {
    code: Int!
    message: String!
  }

  type Role {
    id: ID!
    type: RolesType!
  }
`;
