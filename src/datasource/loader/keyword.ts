import Dataloader from "dataloader";
import { Keyword } from "../../graphql/types/keyword";
import option from "../option";
import getDB from "../db";

class KeywordsLoader {
  public loader: Dataloader<void, Keyword, void>;

  constructor() {
    this.loader = new Dataloader(this.select, option);
  }

  public getAllIDs = () => {
    const query = `
      SELECT keyword FROM keyword
      ORDER BY keyword
    `;

    type columns = {
      keyword: number;
    };

    return new Promise<number[]>((resolve, reject) => {
      let ids: number[] = [];
      getDB()
        .then((db) =>
          db
            .each(
              query,
              (err: Error | null, row: columns) => {
                if (err) reject(err);
                else ids.push(row.keyword);
              },
              (err: Error | null, _count: number) => {
                if (err) reject(err);
                else resolve(ids);
              }
            )
            .close()
        )
        .catch((err) => reject(err));
    });
  };

  private select = async () => {
    const query = `
    SELECT * FROM keyword
    `;
    const db = await getDB();
    let res: Keyword[] = [];
    db.each(query, (err: Error | null, row: any) => {
      res.push(this.makeKeyword(row));
    });
    return res;
  };

  private makeKeyword = (row: any): Keyword => {
    return {
      id: row.keyword,
      name: row.name,
      ref: row.ref,
      slug: row.slug,
      text: row.text,
    };
  };
}

export default KeywordsLoader;
