import { gql } from "apollo-server";
import { PrismaClient } from "prisma/prisma-client";

export const prisma = new PrismaClient();

export const typeDefs = gql`
  scalar DateTime

  type User {
    id: Int
    nome: String
    email: String
    createdAt: DateTime
    posts: [Post]
  }

  type Post {
    id: Int
    titulo: String
    conteudo: String
  }

  type Query {
    users: [User]
    postsByUser(id: Int): [Post]
    postsByReviewer(id: Int): [Post]
  }

  type Mutation {
    createUserAndPost(
      nome: String
      email: String
      titulo: String
      conteudo: String
    ): User
  }
`;

export const resolvers = {
  Query: {
    users: async () =>
      await prisma.user.findMany({
        include: {
          posts: true,
        },
      }),
    postsByUser: async (_: any, args: any) => {
      return prisma.user
        .findUnique({
          where: { id: Number(args.id) },
        })
        .posts();
    },
    postsByReviewer: async (_: any, args: any) => {
      return prisma.review
        .findUnique({
          where: { id: Number(args.id) },
        })
        .reviewer()
        .posts();
    },
  },
  Mutation: {
    createUserAndPost: async (_: any, args: any) => {
      return prisma.user.create({
        data: {
          nome: args.nome,
          email: args.email,
          posts: {
            create: {
              titulo: args.titulo,
              conteudo: args.conteudo,
            },
          },
        },
      });
    },
  },
};
