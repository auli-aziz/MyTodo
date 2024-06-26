import { useState, useEffect, useRef } from "react";
import axios from "axios";
import TodoCard from "./TodoCard.jsx";
import { useAuthContext } from "../hooks/useAuthContext.jsx";

const API_BASE = "http://localhost:3001";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(null);
  const dragTodo = useRef(0);
  const draggedOverTodo = useRef(0);
  // authentication
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getTodos();
    }
  }, [user]);

  const getTodos = async () => {
    try {
      const response = await axios.get(API_BASE + "/todos", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setTodos(response.data);
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  const completeTodo = async (id) => {
    if (!user) {
      return;
    }
    try {
      await axios.put(
        API_BASE + "/todos/complete/" + id,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  const deleteTodo = async (id) => {
    if (!user) {
      return;
    }
    try {
      await axios.delete(API_BASE + "/todos/" + id, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setTodos((todos) => todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  // new task
  const addNewTodo = () => {
    const newTodo = {
      _id: Date.now().toString(),
      content: "Enter new task",
      complete: false,
      isAdding: true,
    };
    setNewTodo(newTodo);
    setTodos([...todos, newTodo]);
  };
  // draggable
  const handleSort = () => {
    const todoClone = [...todos];
    const temp = todoClone[dragTodo.current];
    todoClone[dragTodo.current] = todoClone[draggedOverTodo.current];
    todoClone[draggedOverTodo.current] = temp;
    setTodos(todoClone);
  };
  return (
    <div className="md:px-24">
      <p className="text-white font-sans mb-2">Your tasks</p>
      {todos.map((todo, index) => (
        <div
          draggable
          onDragStart={() => (dragTodo.current = index)}
          onDragEnter={() => (draggedOverTodo.current = index)}
          onDragEnd={handleSort}
        >
          <TodoCard
            key={todo._id}
            id={todo._id}
            index={index}
            isCompleted={todo.complete}
            content={todo.content}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            isAdding={todo.isAdding}
          />
        </div>
      ))}
      <div
        className="w-full h-fit mb-3 flex items-center justify-center text-white bg-neutral-900 py-2 px-6 rounded-3xl opacity-40 hover:opacity-50"
        onClick={addNewTodo}
      >
        <p>Add Task +</p>
      </div>
    </div>
  );
}
