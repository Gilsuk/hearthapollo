import { GraphQLObjectType } from "graphql";
import { Context } from "../context";

type Rarity = {
  id: number;
  slug: string;
  name: string;
};

const rarity = new GraphQLObjectType<any, Context>({
  name: "Rarity",
  fields: {},
});

export { Rarity };
export default rarity;
