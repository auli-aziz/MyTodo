import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
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
        <button className="mt-7 px-7 py-1 bg-slate-900 hover:bg-slate-950 rounded-md">Submit</button>
      </form>
    </div>
  );
}
