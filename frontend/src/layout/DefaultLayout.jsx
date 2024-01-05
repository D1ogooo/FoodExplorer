import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { HeaderUser } from "../components/User/Header";
import { HeaderAdmin } from "../components/Admin/Header";

export function DefaultLayout() {
  return (
   <>
    <HeaderUser/>
     <Outlet/>
    <Footer/>
   </>
  )
}