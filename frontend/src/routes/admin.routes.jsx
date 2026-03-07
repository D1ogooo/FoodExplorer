import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from "../layout/DefaultLayout";
import Dashboard from "../pages/Dashboard/Home/index";
import Pagina_404 from '../pages/Pagina_404';
import SignIn from '../pages/Sign in/index';
import SignUp from '../pages/Sign up/index';
import Editar from '../pages/Dashboard/Admin/Editar';
import AdicionarPrato from '../pages/Dashboard/Admin/Adicionar';

export function AdminRouter() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="/editarPrato" element={<Editar />} />
                <Route path="/adicionarPrato" element={<AdicionarPrato />} />
            </Route>
            <Route path="*" element={<Pagina_404 />} />
        </Routes>
    );
}
