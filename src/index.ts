import { ApolloServer } from "apollo-server";
import conf from "./conf";

const server = new ApolloServer(conf);

const run = () => {
  server
    .listen()
    .then((info) => {
      console.log(`Apollo starts at ${info.url}`);
    })
    .catch((err) => {
      console.error(err);
    });
};

run();
