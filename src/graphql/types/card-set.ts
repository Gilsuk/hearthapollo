import { GraphQLObjectType } from "graphql";
import { Context } from "../context";

type CardSet = {
  id: number;
  name: string;
  slug: string;
  releaseDate: string;
  type: string;
};

const cardSet = new GraphQLObjectType<any, Context>({
  name: "CardSet",
  fields: {},
});

export { CardSet };
export default cardSet;
