import React from 'react'
import { IncluirInspecionar } from '../../../components/User/incluir_inspecionar'
import { InspectValue } from '../../../components/User/Incluir'
import { Container, Return, Principal, PaiContainer, Ingredientes } from './style'
import { Left, Right } from './style'
import returnIcon from '../../../assets/icons/CaretLeft.svg'
import testePrato from '../../../assets/pratos/molla.svg'

function Prato () {
 
 return (
  <>
   <PaiContainer>
    <Return to='/'>
     <img src={returnIcon} alt=""/>
     <p>voltar</p>
    </Return>
    <Container>
    <Principal>
     <Left>
      <img src={testePrato} alt=""/>
     </Left>
     <Right>
      <h1>Salada Ravanello</h1>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
      <Ingredientes>
       <div>
        <p>alface</p>
       </div>
       <div>
        <p>cebola</p>
       </div>
       <div>
        <p>pão naan</p>
       </div>
       <div>
        <p>pepino</p>
       </div>
       <div>
        <p>rabanete</p>
       </div>
       <div>
        <p>tomate</p>
       </div>
      </Ingredientes>
     <IncluirInspecionar/>
     </Right>
    </Principal>
   </Container>
  </PaiContainer>
 </>
 )
}

export default Prato