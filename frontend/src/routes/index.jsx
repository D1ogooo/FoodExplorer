import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LoggedRouter } from "./logged.routes";
import { AuthRouter } from "./auth.routes";
import { AdminRouter } from "./admin.routes";

export function Router() {
  const { user, role } = useAuth();
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

  let RoutesToRender;

  if (!user) {
    RoutesToRender = <AuthRouter />;
  } else if (role === "admin") {
    RoutesToRender = <AdminRouter />;
  } else {
    RoutesToRender = <LoggedRouter />;
  }

  return <BrowserRouter>{RoutesToRender}</BrowserRouter>;
}