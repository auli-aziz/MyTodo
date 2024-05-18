import { useState, useEffect } from "react";
import axios from "axios";

import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <div className="bg-gray-800 w-full min-h-screen p-10">
      <h1 className="text-white text-xl font-mono mb-5">Welcome, Aulia</h1>
      
      <TodoList />
    </div>
  );
}

export default App;
