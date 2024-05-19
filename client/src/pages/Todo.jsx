import React from 'react'
import TodoList from "../components/TodoList.jsx";
import { useAuthContext } from '../hooks/useAuthContext.jsx';

export default function Todo() {
  const { user } = useAuthContext();
  return (
    <div>
      <h1 className="text-white text-xl font-mono mb-5">Welcome, {user && user.payload.name}</h1>
      <TodoList />
    </div>
  )
}
