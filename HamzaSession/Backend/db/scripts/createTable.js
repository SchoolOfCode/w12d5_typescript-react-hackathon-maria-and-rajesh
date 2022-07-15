import { pool, query } from "../index.js";
import pg from "pg";

export async function createTable() {
  const sql_string = `CREATE TABLE IF NOT EXISTS todos (
          id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
          task TEXT
      );`;
  const response = await pool.query(sql_string);
  console.log(response.command);
}
createTable();

// export async function createFeedTable() {
//     const SQL_STRING = `CREATE TABLE IF NOT EXISTS feedback (
//           feedback_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//           time TIMESTAMP,
//           name TEXT,
//           coach TEXT,
//           score INT
//       );`;
//     const RES = await pool.query(SQL_STRING);
//     console.log(RES.command);
//   }
