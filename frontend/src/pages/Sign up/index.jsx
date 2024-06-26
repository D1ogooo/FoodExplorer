import { useState } from "react"
import { Container, Left, Form, ReturnLogin } from "./style"
import { Register } from "../Sign up/style"
import iconfoodexplorer from '../../assets/icons/Polygon 1.svg'

function SignIn() {
  const [username, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function loginSubmit(e) {
   e.preventDefault()
  }

  return (
   <>
     <Container>
      <Left>
       <img src={iconfoodexplorer}/>
       <h2>food explorer</h2>
      </Left>
      <>
       <Form>
        <h1>Crie sua conta</h1>
        <label id="seunome">Seu nome
         <div >
          <input type="text" placeholder="Exemplo: Maria da Silva" onChange={(e) => setName(e.target.value)}/>
         </div>
        </label>
        <label id="email">Email
         <div >
          <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={(e) => setEmail(e.target.value)}/>
         </div>
        </label>
        <label id="Seu nome">Senha
         <div >
          <input type="text" placeholder="No mínimo 6 caracteres" onChange={(e) => setPassword(e.target.value)}/>
         </div>
        </label>
        <Register onClick={loginSubmit}>
         Criar conta
        </Register>
        <ReturnLogin to='/'>
         Já tenho uma conta
        </ReturnLogin>
       </Form>
      </>
     </Container>
   </>
  )
}

export default SignIn