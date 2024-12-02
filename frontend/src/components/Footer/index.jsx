import React from 'react'
import { Container } from './style'
import poligonsinza from '../../assets/icons/Polygon sinza.svg'

export const Footer = () => {
  return (
   <>
    <Container>
     <footer>
      <div>
       <img src={poligonsinza}/>
       <p>food explorer</p>
      </div>
      <div>
       <p>© 2023 - Todos os direitos reservados.</p>
      </div>
     </footer>  
    </Container>
   </>
  )
}