import { Container } from './style'
import AdicionarIcon from '../../assets/icons/Plus.svg'
import DecrementarIcon from '../../assets/icons/Minus.svg'

export const InspectValue = () => {
  return (
   <>
    <Container>
     <button id='increment' onClick={() => increment(card.id)}><img src={DecrementarIcon}/></button>
      <p>01</p>
      <button id='decrement' onClick={() => decrement(card.id)}><img src={AdicionarIcon}/></button>
     <button id='incluir'>incluir</button>
    </Container>
   </>
  )
}
