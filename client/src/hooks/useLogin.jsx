import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const API_BASE = "http://localhost:3001";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    console.log(email, password);
    setIsLoading(true);
    setError(null);

    const response = await fetch(API_BASE + "/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
