import { GraphQLScalarType } from "graphql";

export const userResolver = {
  RolesType: {
    ESTUDANTE: "ESTUDANTE",
    DOCENTE: "DOCENTE",
    COORDENACAO: "COORDENACAO",
  },

  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "string of date and hour on format ISO-8601",
    serialize: (value) => new Date(value).toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (prop) => new Date(prop.value),
  }),

  Query: {
    users: (root, args, { dataSources }, info) => {
      return dataSources.usersApi.getUsers();
    },
    user: (root, { id }, { dataSources }) => {
      return dataSources.usersApi.getUserById(id);
    },
  },

  Mutation: {
    addUser: (_, args, { dataSources }) => {
      return dataSources.usersApi.addUser(args);
    },
    updateUser: (_, args, { dataSources }) => {
      return dataSources.usersApi.updateUser(args);
    },
    deleteUser: (_, args, { dataSources }) => {
      return dataSources.usersApi.deleteUser(args);
    },
  },
};
