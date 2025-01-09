
import React, { useState, useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { Toast } from '../../toast'
import { api } from '../../../services/api'
import { Container, Internal } from './style'
import AdicionarIcon from '../../../assets/icons/Plus.svg'
import DecrementarIcon from '../../../assets/icons/Minus.svg'
import { useNavigate, useParams } from 'react-router-dom'

export const IncluirInspecionar = ({ valor }) => {
  const [stateToast, setStateToast] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { dispatch, quantity } = useContext(CartContext)
  
  function handleToast() {
    setStateToast(true)
    setTimeout(() => {
      setStateToast(false)
      navigate("/")
     }, 2500)
   }

 function AdicionarCarrinho() {
  api.post('/cart/create', {
   id,
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
     <Internal>
     <button type="button" id='decrement' onClick={() => dispatch({type: 'Decrement'})}><img src={DecrementarIcon} alt=""/></button>
      <p>{quantity.count}</p>
     <button type="button" id='increment' onClick={() => dispatch({type: 'Increment'})}><img src={AdicionarIcon} alt=""/></button>
     </Internal>
     <button type="button" id='incluir' onClick={AdicionarCarrinho}>
      incluir ∙ R$ {valor}
     </button>
    </Container>
   </>
  )
}
