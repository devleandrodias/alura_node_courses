import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type User {
    name: String
  }

  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: () => [{ name: "Ana" }, { name: "Bia" }],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }, () => {
  console.log("Server running at port 4000");
});
