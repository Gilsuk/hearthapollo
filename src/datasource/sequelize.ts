import { Sequelize } from "sequelize";

const getSequelize = () =>
  new Sequelize({
    dialect: "sqlite",
    storage: "./hearthstone.db",
  });

export default getSequelize;
