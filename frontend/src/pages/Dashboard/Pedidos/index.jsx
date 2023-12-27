import { Container, Pai, CardContent, Card } from './style'
import { Left, Right, First, Second, ButtonExcluir } from './style'
import exemploPrato from '../../../assets/pratos/molla.svg'

function Pedidos() {
  return (
   <>
    <Container>
     <Pai>
      <Left>
       <h1>Meu pedido</h1>
        <CardContent>
         <Card>
          <First>
           <img src={exemploPrato}/>
          </First>
          <Second>
           1 x  Salada Radish
           <ButtonExcluir>
            Excluir
           </ButtonExcluir>
           <span>
            R$ 25,97
           </span>
          </Second>
         </Card>
        </CardContent>
      </Left>
      <Right>
       
      </Right>
     </Pai>
    </Container>
   </>
  )
}

export default Pedidos