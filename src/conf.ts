import schema, { context, rootValue } from "./graphql";

const conf = {
  schema: schema,
  context: context,
  rootValue: rootValue,
  playground: {
    tabs: [
      {
        endpoint:
          "https://5mt1j7nzw1.execute-api.ap-northeast-2.amazonaws.com/prod/graphql",
        query: "## Open docs for query example",
      },
    ],
  },
};

export default conf;
