import React, { useState, useContext  } from 'react'
import { useReducer } from 'react'
import { IncludeReducer } from '../../../reducers/Incluir'
import { Container } from './style'
import AdicionarIcon from '../../../assets/icons/Plus.svg'
import DecrementarIcon from '../../../assets/icons/Minus.svg'
import { api } from '../../../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { Toast } from '../../toast'
import { CartContext } from '../../../contexts/CartContext'

export const InspectValue = ({ cartId }) => {
  const [stateToast, setStateToast] = useState(false)
  const { dispatch, quantity } = useContext(CartContext)
 const navigate = useNavigate()

 function handleToast() {
   setStateToast(true)
   setTimeout(() => {
     setStateToast(false)
     navigate("/")
    }, 2500)
  }
  
 function AdicionarCarrinho() {
  api.post('/cart/create', {
   id: cartId,
   quantity : quantity.count
  })
  .then(() => {
   handleToast()
  })
  .catch((error) => {
   alert("Produto já se encontra no carrinho")
  })
 }

 return (
  <>
   {stateToast && <Toast />}
   <Container>
    <div style={{ display: "flex", gap: ".8rem", alignItems:"center", justifyContent: "center" }}>
     <button type="button" id='increment' onClick={() => dispatch({type: 'Decrement'})}>
      <img src={DecrementarIcon} alt=""/>
     </button>
      <p style={{ fontSize: "20px"}}>{quantity.count}</p>
     <button type="button" id='decrement' onClick={() => dispatch({type: 'Increment'})}>
      <img src={AdicionarIcon} alt=""/>
    </button>
    </div>
    <button type="button" id='incluir' onClick={AdicionarCarrinho}>
     incluir
    </button>
   </Container>
  </>
 )
}
