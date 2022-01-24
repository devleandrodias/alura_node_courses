const users = [
  {
    id: 1,
    name: "Leandro",
    email: "leandro@gmail.com",
    active: true,
  },
  {
    id: 2,
    name: "Marcia",
    active: true,
  },
];

export const userResolver = {
  Query: {
    users: () => {
      return users;
    },
    firstUser: () => {
      return users[0];
    },
  },
};
