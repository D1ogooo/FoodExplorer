import { useParams } from 'react-router-dom'
import { Container, Return, Principal, PaiContainer, Ingredientes } from './style'
import { Left, Right } from './style'
import returnIcon from '../../../assets/icons/CaretLeft.svg'
import testePrato from '../../../assets/pratos/molla.svg'

function Prato () {
 
 return (
  <>
   <PaiContainer>
    <Return to='/dashboard'>
     <img src={returnIcon}/>
     <p>voltar</p>
    </Return>
    <Container>
    <Principal>
     <Left>
      <img src={testePrato}/>
     </Left>
     <Right>
      <h1>Salada Ravanello</h1>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
      <Ingredientes>
       <p></p>
      </Ingredientes>
     </Right>
    </Principal>
   </Container>
  </PaiContainer>
  </>
 )
}

export default Prato