import { useState } from 'react'
import { Container, FirstMainComponent, SecondMainContainer } from './style'
import { CardPai, Card, InspectValue, FirstContentCard } from './style'
import { Left, Right } from './style'
import firstimageIcon from '../../assets/images/pngegg 1.svg'
import ravanello from '../../assets/pratos/ravanello.svg'
import Heart from '../../assets/icons/Heart vazio.svg'
import HeartCheio from '../../assets/icons/Heart cheio.svg'
import AdicionarIcon from '../../assets/icons/Plus.svg'
import DecrementarIcon from '../../assets/icons/Minus.svg'

function Dashboard () {
  const [love, setLove] = useState(false)
  return (
   <>
    <Container>
     <FirstMainComponent>
      <Left>
       <img src={firstimageIcon}/>
      </Left>
      <Right>
       <h1>Sabores inigualáveis</h1>
       <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </Right>
     </FirstMainComponent>

     <SecondMainContainer>
      <h1>Refeições</h1>
      <CardPai>
       <Card>
        <FirstContentCard>
         <img src={ravanello}/>
         <img src={love ? Heart : HeartCheio} onClick={() => setLove(!love)}/>
        </FirstContentCard>
        <p>Massa fresca com camarões e pesto. </p>
        <h2>R$ 79,97</h2>
        <InspectValue>
         <button id='increment' onClick={() => increment(card.id)}><img src={DecrementarIcon}/></button>
          <p>01</p>
         <button id='decrement' onClick={() => decrement(card.id)}><img src={AdicionarIcon}/></button>
         <button id='incluir'>incluir</button>
        </InspectValue>
       </Card>
      </CardPai>
     </SecondMainContainer>
    </Container>
   </>
  )
}

export default Dashboard