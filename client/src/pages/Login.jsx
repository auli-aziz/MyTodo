import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit!",email,password)
    await login(email, password);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="m-5 p-5 min-w-[500px] flex flex-col bg-slate-700 items-center text-white rounded-xl"
      >
        <h3 className="mb-7 font-bold text-2xl">LogIn</h3>
        <div className="flex flex-col w-full px-12">
          <label>Email:</label>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Enter email"
            className="p-1 my-3 rounded-sm text-black"
          />
          <label>Password:</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            placeholder="Enter password"
            className="p-1 my-3 rounded-sm text-black"
          />
        </div>
        <button
          className="mt-7 px-7 py-1 bg-slate-900 hover:bg-slate-950 rounded-md"
          disabled={isLoading}
        >
          Submit
        </button>
        { error && <div className="flex justify-center bg-red-300 border-2 border-red-500 px-5 mt-2 text-red-800  rounded-md">{error}</div>}
      </form>
    </div>
  );
}
