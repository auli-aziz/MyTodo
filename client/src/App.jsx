import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import Todo from "./pages/Todo.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="mt-10 bg-gray-800 w-full min-h-screen p-10 md:p-16">
          <Routes>
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/" element={user ? <Todo /> : <Navigate to="/login" />} />
          </Routes>
        </div>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
