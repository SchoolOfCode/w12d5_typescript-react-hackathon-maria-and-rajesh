import express from "express";
import { getAllToDos, addToDos } from "../models/todos.js";
const router = express.Router();

router.get("/", async function (req, res) {
  const result = await getAllToDos();
  res.json({ success: true, payload: result });
});

router.post("/", async function (req, res) {
  const result = await addToDos(req.body);
  res.json({ success: true, payload: result });
});


export default router;
 