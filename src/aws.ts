import { ApolloServer } from "apollo-server-lambda";
import conf from "./conf";

const server = new ApolloServer(conf);

export const graphqlHandler = server.createHandler();
