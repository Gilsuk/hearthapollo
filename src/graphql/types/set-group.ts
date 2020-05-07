import { CardSet } from "./card-set";
import { GraphQLObjectType } from "graphql";
import { Context } from "../context";

type SetGroup = {
  id: number;
  slug: string;
  year: number;
  name: string;
  standard: boolean;
  cardSets: CardSet[];
};

const setGroup = new GraphQLObjectType<any, Context>({
  name: "SetGroup",
  fields: {},
});

export { SetGroup };
export default setGroup;
