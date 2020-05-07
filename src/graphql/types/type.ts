import { GraphQLObjectType } from "graphql";
import { Context } from "../context";

type Type = {
  id: number;
  slug: string;
  name: string;
};

const cardType = new GraphQLObjectType<any, Context>({
  name: "Type",
  fields: {},
});

export { Type };
export default cardType;
