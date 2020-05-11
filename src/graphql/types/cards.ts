import { GraphQLObjectType } from "graphql";
import { Context } from "../context";
import { Card } from "./card";

type Cards = {
  card: Card[];
  pageSize: number;
  curPage: number;
  endPage: number;
  cardsCount: number;
};

const cards = new GraphQLObjectType<Cards, Context>({
  name: "Cards",
  fields: {},
});

export default cards;
export { Cards };
