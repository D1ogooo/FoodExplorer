import React from 'react'
import { useRef } from "react";
import { CardCreate } from './style'
import plusbButton from '../../../assets/icons/Plus.svg'

function Marcacoes({ setListaDeMarcadores }) {
  const markinput = useRef(null)

  const handleClick = () => {
    if (markinput.current) {
     const newmark = markinput.current.value

     if(newmark.length > 0) {
     setListaDeMarcadores((prevState) => [...prevState, newmark])
     }
    } else {
     console.log("Falha")
    }
  }

  return (
   <CardCreate>
    <input type="text" placeholder="Adicionar" ref={markinput} />
    <img src={plusbButton} onClick={handleClick} alt=""/>
   </CardCreate>
  )
}

export default Marcacoes