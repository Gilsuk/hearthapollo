import { GraphQLObjectType } from "graphql";
import { Context } from "../context";
import { Class } from "./class";
import { Keyword } from "./keyword";

type Card = {
  id: number;
  slug: string;
  class: string;
  classed: Class[];
  type: string;
  cardSet: string;
  rarity: string;
  race: string;
  keywords: Keyword[];
  artist: string;
  name: string;
  text: string;
  flavor: string;
  img: string;
  cropImg: string;
  cost: number;
  health: number;
  attack: number;
  armor: number;
  arena: boolean;
  collectable: boolean;
  standard: boolean;
  parent: Card[];
  children: Card[];
};

const card = new GraphQLObjectType<Card, Context>({
  name: "Card",
  fields: {},
});

export default card;
export { Card };
