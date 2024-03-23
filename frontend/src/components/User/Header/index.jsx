import { Container, Logo } from './style'
import { Search, ButtonPedidos, ButtonLoggout, Favoritos} from './style'
import principalIcon from '../../../assets/icons/Polygon 1.svg'
import searchIcon from '../../../assets/icons/search.svg'
import receitaIcon from '../../../assets/icons/Receipt.svg'
import loggoutIcon from '../../../assets/icons/SignOut.svg'

export const HeaderUser = () => {
 return (
  <>
   <Container>
    <header>
     <Logo to='/dashboard'>
      <img src={principalIcon}/>
      <p>food explorer</p>
     </Logo>

     <Search>
      <div>
       <img src={searchIcon}/>
       <input type="text" placeholder='Busque por pratos ou ingredientes'/>
      </div>
     </Search>

    <Favoritos to='/favoritos'>
     <p>Meus favoritos</p>
    </Favoritos>

    <ButtonPedidos to='/checkinPedidos'>
     <img src={receitaIcon}/>
     <p>Pedidos (0)</p>
    </ButtonPedidos>

    <ButtonLoggout to='/'>
     <img src={loggoutIcon}/>
    </ButtonLoggout>
    </header>
   </Container>
  </>
 )
}