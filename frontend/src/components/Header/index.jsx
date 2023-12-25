import { Container, Logo } from './style'
import { Search, ButtonPedidos, ButtonLoggout } from './style'
import principalIcon from '../../assets/icons/Polygon 1.svg'
import searchIcon from '../../assets/icons/search.svg'
import receitaIcon from '../../assets/icons/Receipt.svg'
import loggoutIcon from '../../assets/icons/SignOut.svg'

export const Header = () => {
 return (
  <>
   <Container>
    <header>
     <Logo>
      <img src={principalIcon}/>
      <p>food explorer</p>
     </Logo>

     <Search>
      <div>
       <img src={searchIcon}/>
       <input type="text" placeholder='Busque por pratos ou ingredientes'/>
      </div>
     </Search>

    <ButtonPedidos>
     <img src={receitaIcon}/>
     <p>Pedidos (0)</p>
    </ButtonPedidos>

    <ButtonLoggout>
     <img src={loggoutIcon}/>
    </ButtonLoggout>
    </header>
   </Container>
  </>
 )
}