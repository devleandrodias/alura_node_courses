import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers/index.mjs";
import { types } from "./types.mjs";
import { query } from "./query.mjs";

const typeDefs = [types, query];

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log("Server running...");
});
