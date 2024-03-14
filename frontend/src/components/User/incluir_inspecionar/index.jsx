import { useState } from 'react'
import { Container, Internal } from './style'
import AdicionarIcon from '../../../assets/icons/Plus.svg'
import DecrementarIcon from '../../../assets/icons/Minus.svg'

export const IncluirInspecionar = () => {
  let [quantities, setQuantities] = useState(1)
  
  function decrement() {
   if(quantities === 0) {
    null
   } else {
    quantities -= 1
    setQuantities(quantities)
   }
  }

  function increment() {
    quantities += 1
    setQuantities(quantities)
  }

  return (
   <>
    <Container>
     <Internal>
     <button id='decrement' onClick={decrement}><img src={DecrementarIcon}/></button>
      <p>{quantities}</p>
     <button id='increment' onClick={increment}><img src={AdicionarIcon}/></button>
     </Internal>
     <button id='incluir'>incluir ∙ R$ 25,00</button>
    </Container>
   </>
  )
}
