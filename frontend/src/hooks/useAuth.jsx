import React, { useState, useEffect, useContext, createContext } from "react";
import { jwtDecode } from "jwt-decode";
import { api } from "../services/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
	const [role, setRole] = useState("");
	const [data, setData] = useState({});

	useEffect(() => {
		const user = localStorage.getItem("@FoodExplorer:user");
		const token = localStorage.getItem("@FoodExplorer:token");

		if (user && token) {
			const { role } = jwtDecode(token);
			setRole(role);
			setData({ user: JSON.parse(user), token });
			api.defaults.headers.authorization = `Bearer ${token}`;
		}
	}, []);

	async function signin({ email, password }) {
		try {
			const res = await api.post("/users/session", { email, password });
			const { user, token } = res.data;
			
			const { role } = jwtDecode(token);
			setRole(role);
			
			localStorage.setItem("@FoodExplorer:user", JSON.stringify(user));
			localStorage.setItem("@FoodExplorer:token", token);
			
			api.defaults.headers.authorization = `Bearer ${token}`;
			setData({ user, token });
		} catch (error) {
			alert('Usuário ou senha inválidos')
			return 
		}
	}

	async function signup({ name, email, password }){
		try {
			await api.post('/users/create', {
        nome: name,
        email,
        password,
      });
		} catch (error) {
      alert(error)
    }
	 }

	async function loggout() {
		window.location.reload();
		localStorage.removeItem("@FoodExplorer:user");
		localStorage.removeItem("@FoodExplorer:token");
		api.defaults.headers.authorization = "";
		setData({});
	}

	return (
		<AuthContext.Provider value={{ role, user: data.user, signin, signup, loggout }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const Context = useContext(AuthContext);
	return Context;
}

export { useAuth, AuthProvider };
