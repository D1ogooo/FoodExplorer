import { useEffect, useState, useContext, createContext } from "react";
import {jwtDecode} from 'jwt-decode';
import { api } from "../services/api";

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const [role, setRole] = useState('')
  const [data, setData] = useState({})

  useEffect(() => {
    const user = localStorage.getItem("@FoodExplorer:user");
    const token = localStorage.getItem("@FoodExplorer:token");

    if (user && token) {
      setData({ user: JSON.parse(user), token });
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
  }, []);
  
  async function signin({ email, password }) {
   try {
    const res = await api.post('/users/session', { email, password })
    const { user, token } = res.data
    
    const { role } = jwtDecode(token)
    setRole(role)

    localStorage.setItem("@FoodExplorer:user", JSON.stringify(user));
    localStorage.setItem("@FoodExplorer:token", token);
    
    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ user, token });
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
   <AuthContext.Provider value={{ role, user: data.user, signin, loggout }}>
    {children}
   </AuthContext.Provider>
  )
}

function useAuth() {
 const Context = useContext(AuthContext)
 return Context
}

export { useAuth, AuthProvider }