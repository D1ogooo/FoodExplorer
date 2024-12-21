import React from 'react'
import { useAuth } from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { HeaderUser } from "../components/User/Header";
import { HeaderAdmin } from "../components/Admin/Header";

export function DefaultLayout() {
 const { role } = useAuth()
 return (
  <>
   {role === "usuario" ?
    <HeaderUser/> : <HeaderAdmin />
   }
    <Outlet/>
    <Footer/>
  </>
 )
}