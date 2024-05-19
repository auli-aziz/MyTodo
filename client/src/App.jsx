import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="mt-10 bg-gray-800 w-full min-h-screen p-10 md:p-16">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Todo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
