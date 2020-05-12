import sqlite3, { Database } from "sqlite3";

const getDB: () => Promise<Database> = () => {
  return new Promise<Database>((resolve, reject) => {
    const db = new sqlite3.Database(
      "./hearthstone.db",
      sqlite3.OPEN_READONLY,
      (err) => {
        if (err) reject(err);
      }
    );
    resolve(db);
  });
};

export default getDB;
