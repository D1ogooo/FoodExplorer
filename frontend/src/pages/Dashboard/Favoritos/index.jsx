import { Container, Pai, PratosContent } from './style'
import { Content, Left, Right } from './style'
import RadishImage from '../../../assets/pratos/ravanello.svg'

function Favoritos () {
  return (
   <>
    <Container>
     <Pai>
      <h1>Meus favoritos</h1>
      <PratosContent>
       <Content>
        <Left>
         <img src={RadishImage}/>
        </Left>
        <Right>
         <h2>Salada Radish</h2>
         <button>
          Remover dos Favoritos
         </button>
        </Right>
       </Content>
       <Content>
        <Left>
         <img src={RadishImage}/>
        </Left>
        <Right>
         <h2>Salada Radish</h2>
         <button>
          Remover dos Favoritos
         </button>
        </Right>
       </Content>
       <Content>
        <Left>
         <img src={RadishImage}/>
        </Left>
        <Right>
         <h2>Salada Radish</h2>
         <button>
          Remover dos Favoritos
         </button>
        </Right>
       </Content>
       <Content>
        <Left>
         <img src={RadishImage}/>
        </Left>
        <Right>
         <h2>Salada Radish</h2>
         <button>
          Remover dos Favoritos
         </button>
        </Right>
       </Content>
      </PratosContent>
     </Pai>
    </Container>
   </>
  )
}

export default Favoritos