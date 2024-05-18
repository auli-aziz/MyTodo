import express from "express";
import {
  getTodos,
  getTodoById,
  postTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/ToDoController.js";

const router = express.Router();

router.get("/todos", getTodos);
router.get("/todos/:todoId", getTodoById);
router.post("/todos", postTodo);
router.put("/todos/:todoId", updateTodo);
router.delete("/todos/:todoId", deleteTodo);

export default router;
