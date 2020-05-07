import { GraphQLObjectType } from "graphql";
import { Context } from "../context";

type Keyword = {
  id: number;
  slug: string;
  name: string;
  text: string;
  ref: string;
};

const keyword = new GraphQLObjectType<any, Context>({
  name: "Keyword",
  fields: {},
});

export { Keyword };
export default keyword;
