import { GraphQLObjectType, GraphQLID } from "graphql";
import { RootValue } from "./root-value";
import { Context } from "./context";

const query = new GraphQLObjectType<RootValue, Context>({
  name: "Query",
  fields: {
    test: {
      type: GraphQLID,
      resolve: async () => 1,
    },
  },
});

export default query;
