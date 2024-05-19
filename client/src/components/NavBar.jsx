import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout.jsx";
import { useAuthContext } from "../hooks/useAuthContext.jsx";

export default function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="absolute top-0 left-0 flex items-center p-3 md:px-12 bg-neutral-800 w-full">
      <Link to="/">
        <h3 className="font-mono text-amber-500 text-2xl">MyTodo</h3>
      </Link>
      <nav>
        {user && (
          <div className="absolute top-2 right-5 flex items-center">
            <span className="text-blue-700 text-sm mr-2">{user.payload.email}</span>
            <div className="px-2 py-1 text-neutral-300 border-2 border-blue-900 rounded-lg">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
        {!user && (
          <div className="absolute top-4 right-12 flex justify-center text-white">
            <Link to="/login">
              <p className="pl-7">Login</p>
            </Link>
            <Link to="/signup">
              <p className="pl-7">Signup</p>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
