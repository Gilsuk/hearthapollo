import { GraphQLObjectType } from "graphql";
import { Context } from "../context";

type Card = {
  id: number;
  slug: string;
  class: string;
  classes: string[];
  type: string;
  cardSet: string;
  rarity: string;
  race: string;
  keywords: {
    name: string;
    text: string;
  }[];
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
  durability: number;
  arena: boolean;
  collectable: boolean;
  standard: boolean;
  parents: Card[];
  children: Card[];
};

const card = new GraphQLObjectType<Card, Context>({
  name: "Card",
  fields: {},
});

export default card;
export { Card };
