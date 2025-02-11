import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LoggedRouter } from "./logged.routes";
import { AuthRouter } from "./auth.routes";

export function Router() {
	const { user } = useAuth();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkUser = () => {
			setLoading(false);
		};
		checkUser();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<BrowserRouter>{user ? <LoggedRouter /> : <AuthRouter />}</BrowserRouter>
	);
}
