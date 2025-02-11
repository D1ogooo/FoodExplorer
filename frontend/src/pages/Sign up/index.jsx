import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { Container, Left, Form, ReturnLogin } from "./style"
import { Register } from "../Sign up/style"
import iconfoodexplorer from '../../assets/icons/Polygon 1.svg'

function SignUp() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  function handleSubmit(e) {
   e.preventDefault()
   api.post('/users/create', { name, email, password })
   .then(() => {
    navigate('/')
   })
   .catch((error) => {
    alert(error.message)
   })
  }

  return (
   <>
     <Container>
      <Left>
       <img alt='' src={iconfoodexplorer}/>
       <h2>food explorer</h2>
      </Left>
      <Form>
        <h1>Crie sua conta</h1>
        <label id="seunome">Seu nome
         <div >
          <input type="text" placeholder="Exemplo: Maria da Silva" onChange={(e) => setName(e.target.value)}/>
         </div>
        </label>
        <label id="email">Email
         <div >
          <input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={(e) => setEmail(e.target.value)}/>
         </div>
        </label>
        <label id="Seu nome">Senha
         <div>
          <input type="password" placeholder="No mínimo 6 caracteres" onChange={(e) => setPassword(e.target.value)}/>
         </div>
        </label>
        <Register onClick={handleSubmit}>
         Criar conta
        </Register>
        <ReturnLogin to='/'>
         Já tenho uma conta
        </ReturnLogin>
       </Form>
     </Container>
   </>
  )
}

export default SignUp