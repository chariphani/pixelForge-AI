import { createContext, useEffect, useState } from "react";
import { fetchMe, loginUser, registerUser } from "../services/authService";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("pixelforge_token");
    if (!token) { setLoading(false); return; }
    fetchMe().then((data) => setUser(data.user)).catch(() => {
      localStorage.removeItem("pixelforge_token");
    }).finally(() => setLoading(false));
  }, []);

  const login = async (credentials) => {
    const data = await loginUser(credentials);
    localStorage.setItem("pixelforge_token", data.token);
    setUser(data.user);
    return data.user;
  };

  const register = async (details) => {
    const data = await registerUser(details);
    localStorage.setItem("pixelforge_token", data.token);
    setUser(data.user);
    return data.user;
  };

  const logout = () => {
    localStorage.removeItem("pixelforge_token");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, loading, login, register, logout, setUser }}>{children}</AuthContext.Provider>;
}
