import { useState, useEffect } from "react";
import axios from "axios";
import TodoCard from "./TodoCard.jsx";

const API_BASE = "http://localhost:3001";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const response = await axios.get(API_BASE + "/todos");
      console.log(todos);
      setTodos(response.data);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const completeTodo = async (id) => {
    try {
      await axios.put(API_BASE + "/todos/complete/" + id);
    } catch (error) {
      console.log(id);
      console.log("Error: " + error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(API_BASE + "/todos/" + id);

      setTodos((todos) => todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  return (
    <div className="md:px-24">
      <p className="text-white font-sans mb-2">Your tasks</p>
      {todos.map((todo) => (
        <TodoCard
          key={todo._id}
          id={todo._id}
          isCompleted={todo.complete}
          content={todo.content}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <div className="w-full h-fit mb-3 flex items-center justify-center text-white bg-neutral-900 py-2 px-6 rounded-3xl opacity-40 hover:opacity-50">
        <p>Add Task +</p>
      </div>
    </div>
  );
}
