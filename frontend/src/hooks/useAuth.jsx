import { useState, useContext, createContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const [data, setData] = useState()
  const USER = false
  
  async function signin({ email, password }) {
   try {
    const res = await api.post('/users/session', { email, password })
    const { user, token } = res.data

    localStorage.setItem("@FoodExplorer:user", JSON.stringify(user));
    localStorage.setItem("@FoodExplorer:token", token);

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ user, token })
   } catch (error) {
    console.log(error)
   }
  }

  async function loggout() {
    localStorage.removeItem("@FoodExplorer:user");
    localStorage.removeItem("@FoodExplorer:token");
    api.defaults.headers.authorization = '';
    setData({});
  }

  return (
   <AuthContext.Provider value={{ USER, signin, loggout }}>
    {children}
   </AuthContext.Provider>
  )
}

function useAuth() {
 const Context = useContext(AuthContext)
 return Context
}

export { useAuth, AuthProvider }