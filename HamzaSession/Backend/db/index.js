import pg from "pg";
import "dotenv/config";

/* Uses a pool instead of client to allow multiple connections

You need to create a .env file to store database credentials */

//pool client
export const pool = new pg.Pool({
  connectionString: process.env.PGURI,
  ssl: { rejectUnauthorized: false },
});

export function query(text, params, callback) {
  return pool.query(text, params, callback);
}
//ssl authorization
//PGURI
//process.env.PGURI

export const someToDos = [
  { id: 1, task: "Clean dishes" },
  { id: 2, task: "Vacuum room" },
  { id: 3, task: "Dust the furniture" },
];
