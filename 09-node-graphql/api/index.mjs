import { ApolloServer } from "apollo-server";

import { types } from "./types.mjs";
import { query } from "./query.mjs";
import { resolvers } from "./resolvers/index.mjs";

import { UsersApi } from "./datasource/user.datasource.mjs";
import { RolesApi } from "./datasource/role.datasource.mjs";

const typeDefs = [types, query];

const dataSources = () => ({
  usersApi: new UsersApi(),
  rolesApi: new RolesApi(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen(4000).then(() => {
  console.log("Server running...");
});
