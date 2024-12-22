
import React,{ useReducer } from 'react'
import { IncludeReducer } from '../../../reducers/Incluir'
import { Container, Internal } from './style'
import AdicionarIcon from '../../../assets/icons/Plus.svg'
import DecrementarIcon from '../../../assets/icons/Minus.svg'

export const IncluirInspecionar = () => {
  const [quantities, dispatch] = useReducer(IncludeReducer, {
   count: 0,
  })

  return (
   <>
    <Container>
     <Internal>
     <button id='decrement' onClick={() => dispatch({type: 'Decrement'})}><img src={DecrementarIcon}/></button>
      <p>{quantities.count}</p>
     <button id='increment' onClick={() => dispatch({type: 'Increment'})}><img src={AdicionarIcon}/></button>
     </Internal>
     <button id='incluir'>incluir ∙ R$ 25,00</button>
    </Container>
   </>
  )
}
