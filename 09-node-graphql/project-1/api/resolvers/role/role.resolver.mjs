export const roleResolver = {
  Query: {
    roles: (_, args, { dataSources }) => {
      return dataSources.rolesApi.getRoles();
    },
  },
};
