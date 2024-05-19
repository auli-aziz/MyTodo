import Todos from "../models/TodoModel.js";

export const getTodos = async (req, res, next) => {
  try {
    const user_id = req.user._id;
    const todos = await Todos.find({ user_id });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postTodo = async (req, res, next) => {
  try {
    const todo = new Todos({
      content: req.body.content,
      user_id: req.user._id,
    });
    const insertTodo = await todo.save();
    res
      .status(201)
      .json({ message: "Todo added successfully", payload: insertTodo });
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

export const updateTodo = async (req, res, next) => {
  const id = req.params.todoId;
  const newData = req.body;
  try {
    const todo = await Todos.updateOne({ _id: id }, { $set: newData });
    res
      .status(200)
      .json({ message: "Todo updated successfully", payload: todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const completeTodo = async (req, res, next) => {
  const id = req.params.todoId;
  try {
    const todo = await Todos.findById({ _id: id });
    if (!todo) {
      const error = new Error("Todo not found");
      error.message = "Todo not found";
      error.status = 404;
      throw error;
    }
    todo.complete = !todo.complete;
    await todo.save();
    res
      .status(200)
      .json({ message: "Todo completed successfully", payload: todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res, next) => {
  const id = req.params.todoId;
  try {
    const todo = await Todos.deleteOne({ _id: id });
    res
      .status(200)
      .json({ message: "Todo deleted successfully", payload: todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const getTodoById = async (req, res, next) => {
//   const id = req.params.todoId;
//   try {
//     const todo = await Todos.findById(id);
//     if (!todo) {
//       const error = new Error("Todo not found");
//       error.status = 404;
//       error.message = "Todo not found";
//       throw error;
//     }
//     res.status(200).json(todo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };