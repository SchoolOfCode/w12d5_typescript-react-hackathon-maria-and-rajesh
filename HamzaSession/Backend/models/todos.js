//For testing on localhost we were importing sometodos
//import { someToDos } from "../db/index.js";
import { pool } from "../db/index.js";

export async function getAllToDos() {
  let response = await pool.query(`SELECT * FROM todos;`);    
  return response.rows;
}

export async function addToDos(todos) {
    console.log("New todo add is "+ todos.task)
  let response = await pool.query(`INSERT INTO todos (task) VALUES ($1) RETURNING *;`, [todos.task]);  
  return response.rows;
}