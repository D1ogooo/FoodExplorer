import React from 'react'
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import Pagina_404 from "../pages/Pagina_404";
import Favoritos from "../pages/Dashboard/Favoritos/index";
import Dashboard from "../pages/Dashboard/Home/index";
import Prato from "../pages/Dashboard/Prato";
import Pedidos from "../pages/Dashboard/Pedidos";
import Editar from "../pages/Dashboard/Admin/Editar";
import AdicionarPrato from "../pages/Dashboard/Admin/Adicionar";

export function LoggedRouter() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route index element={<Dashboard />} />
				<Route path="/checkinPedidos" element={<Pedidos />} />
				<Route path="/prato/:id" element={<Prato />} />
				<Route path="/favoritos" element={<Favoritos />} />
				<Route path="/editarPrato" element={<Editar />} />
				<Route path="/adicionarPrato" element={<AdicionarPrato />} />
			</Route>
			<Route path="*" element={<Pagina_404 />} />
		</Routes>
	);
}
