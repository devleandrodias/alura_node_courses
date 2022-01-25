export const userResolver = {
  Query: {
    users: (root, args, { dataSources }, info) => {
      return dataSources.usersApi.getUsers();
    },
    user: (root, { id }, { dataSources }) => {
      return dataSources.usersApi.getUserById(id);
    },
  },
};
