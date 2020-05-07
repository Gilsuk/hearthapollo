import { GraphQLObjectType } from "graphql";
import { Context } from "../context";

type Class = {
  id: number;
  slug: string;
  name: string;
};

const clazz = new GraphQLObjectType<any, Context>({
  name: "Class",
  fields: {},
});

export { Class };
export default clazz;
