import { pool } from "../index.js";
import { someToDos } from "../index.js";

export async function populateTable(){
    for( let i=0; i<someToDos.length; i++){
    const res = await pool.query(`INSERT INTO todos (task) VALUES ($1) RETURNING *;`, [someToDos[i].task])
    console.log( res.command + "populated table")};
};

populateTable();