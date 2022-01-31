import { gql } from "apollo-server";

export const query = gql`
  scalar DateTime

  enum RolesType {
    ESTUDANTE
    DOCENTE
    COORDENACAO
  }

  type Query {
    users: [User]
    user(id: ID!): User
    roles: [Role]
  }

  type Mutation {
    addUser(user: UserInput): CreateUserResponse!
    updateUser(id: ID!, user: UserInput): UpdateUserResponse!
    deleteUser(id: ID!): DeleteUserResponse!
  }
`;
