import express from "express";
import {
  getTodos,
  postTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
} from "../controllers/ToDoController.js";

const router = express.Router();

router.get("/", getTodos);
// router.get("/:todoId", getTodoById);
router.post("/", postTodo);
router.put("/:todoId", updateTodo);
router.put("/complete/:todoId", completeTodo);
router.delete("/:todoId", deleteTodo);

export default router;
