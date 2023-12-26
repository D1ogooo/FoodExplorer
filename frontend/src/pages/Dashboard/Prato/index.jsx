import { Container, Return, Principal } from './style'
import { Left, Right } from './style'
import returnIcon from '../../../assets/icons/CaretLeft.svg'
import testePrato from '../../../assets/pratos/molla.svg'

function Prato () {
 return (
  <>
   <Container>
    <Return>
     <img src={returnIcon}/>
     <p>voltar</p>
    </Return>
    <Principal>
     <Left>
      <img src={testePrato}/>
     </Left>
     <Right>
      <h1>Salada Ravanello</h1>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
      {}
     </Right>
    </Principal>
   </Container>
  </>
 )
}

export default Prato