import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LoggedRouter } from "./logged.routes";
import { AuthRouter } from "./auth.routes";

export function Router () {
  const { USER } = useAuth()
  return (
   <BrowserRouter>
    {USER ? <LoggedRouter/> : <AuthRouter/>}
   </BrowserRouter>
  )
}