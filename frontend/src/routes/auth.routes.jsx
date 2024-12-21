import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Pagina_404 from '../pages/Pagina_404';
import SignIn from '../pages/Sign in/index';
import SignUp from '../pages/Sign up/index';

export function AuthRouter() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
      <Route path="*" element={<Pagina_404 />} />
    </Routes>
  );
}
