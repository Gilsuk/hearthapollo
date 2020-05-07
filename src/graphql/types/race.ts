import { GraphQLObjectType } from "graphql";
import { Context } from "../context";

type Race = {
  id: number;
  slug: string;
  name: string;
};

const race = new GraphQLObjectType<any, Context>({
  name: "Race",
  fields: {},
});

export { Race };
export default race;
