import { useState } from "react";
import { useAuthContext } from "./useAuthContext.jsx";

const API_BASE = "http://localhost:3001";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(API_BASE + "/user/signup", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, password})
    });
    const json = await response.json();
    if(!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      localStorage.setItem('user', JSON.stringify(json));
      dispatch({type: 'LOGIN', payload: json});
      setIsLoading(false);
    }

  }
  return { signup, isLoading, error };
}