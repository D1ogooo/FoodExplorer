import { useRef } from "react";
import { CardCreate } from './style'
import plusbButton from '../../../assets/icons/Plus.svg'

function Marcacoes({ /* setListaDeMarcadores */ }) {
  let markinput = useRef(null)

  // const handleClick = () => {
  //   if (markinput.current) {
  //    let newmark = markinput.current.value
  //    setListaDeMarcadores((prevState) => [...prevState, newmark])
  //   } else {
  //    console.log("Falha")
  //   }
  // }

  return (
   <CardCreate>
    <input type="text" placeholder="Novo marcador" ref={markinput} />
    <img src={plusbButton} />
    {/* onClick={handleClick} */}
   </CardCreate>
  )
}

export default Marcacoes