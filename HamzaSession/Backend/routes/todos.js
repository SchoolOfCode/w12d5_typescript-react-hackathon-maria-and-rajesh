import express from "express";
import { getAllToDos } from "../models/todos.js";
const router = express.Router();

router.get("/", function (req, res) {
  res.json({ success: true, payload: getAllToDos() });
});

export default router;
