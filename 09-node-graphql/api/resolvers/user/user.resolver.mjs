export const userResolver = {
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
