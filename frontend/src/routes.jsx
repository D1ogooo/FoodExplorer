import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import Favoritos from './pages/Dashboard/Favoritos/index'
import SignIn from './pages/Sign in/index'
import SignUp from './pages/Sign up/index'
import Dashboard from './pages/Dashboard/Home/index'
import Prato from './pages/Dashboard/Prato'
import Pedidos from './pages/Dashboard/Pedidos'
import Editar from './pages/Dashboard/Admin/Editar'

export function Router() {
 return (
  <>
   <Routes>
    <Route path='/register' element={<SignUp/>}/>
    <Route path='/login' element={<SignIn/>}/>
   <Route path='/' element={<DefaultLayout/>}> //Rota padrão da dashboard
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/checkinPedidos' element={<Pedidos/>}/>
    <Route path='/prato/:id' element={<Prato/>}/>
    <Route path='/favoritos' element={<Favoritos/>}/>
    <Route path='/editarPrato' element={<Editar/>}/>
   </Route>
  </Routes>
  </>
 )
}