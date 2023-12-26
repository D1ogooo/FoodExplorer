import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import Favoritos from './pages/Dashboard/Favoritos/index'
import SignIn from './pages/Sign in/index'
import SignUp from './pages/Sign up/index'
import Dashboard from './pages/Dashboard/Home/index'
import Prato from './pages/Dashboard/Prato'

export function Router() {
 return (
  <>
   <Routes>
    <Route path='/register' element={<SignUp/>}/>
    <Route path='/login' element={<SignIn/>}/>
   <Route path='/' element={<DefaultLayout/>}> //Rota padrão da dashboard
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/favoritos' element={<Favoritos/>}/>
    <Route path='/prato/:id' element={<Prato/>}/>
   </Route>
  </Routes>
  </>
 )
}