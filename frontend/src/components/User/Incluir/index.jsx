import React from 'react'
import { useReducer } from 'react'
import { IncludeReducer } from '../../../reducers/Incluir'
import { Container } from './style'
import AdicionarIcon from '../../../assets/icons/Plus.svg'
import DecrementarIcon from '../../../assets/icons/Minus.svg'

export const InspectValue = () => {
 const [quantities, dispatch] = useReducer(IncludeReducer, {
  count: 0,
 })

 return (
  <>
   <Container>
    <button id='increment' onClick={() => dispatch({type: 'Decrement'})}><img src={DecrementarIcon}/></button>
     <p>{quantities.count}</p>
     <button id='decrement' onClick={() => dispatch({type: 'Increment'})}><img src={AdicionarIcon}/></button>
    <button id='incluir'>incluir</button>
   </Container>
  </>
 )
}
