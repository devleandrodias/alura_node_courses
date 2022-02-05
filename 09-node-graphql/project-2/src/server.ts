import { ApolloServer } from "apollo-server";

import { prisma, resolvers, typeDefs } from "./index";

const server = new ApolloServer({ typeDefs, resolvers, context: prisma });

server.listen({ port: 4000 }, () => {
  console.log("Server running at port 4000");
});
