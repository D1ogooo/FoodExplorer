import { useState } from 'react'
import { dbRefeicoes } from '../../DB/data'
import { dbSobremesas } from '../../DB/data'
import { dbBebidas } from '../../DB/data'
import { Container, FirstMainComponent, SecondMainContainer, ThirdMainContainer, FordMainContainer } from './style'
import { CardPai, Card, InspectValue, FirstContentCard } from './style'
import { Left, Right } from './style'
import firstimageIcon from '../../assets/images/pngegg 1.svg'
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
       {dbRefeicoes.map((refeicoes,index) => (
        <Card key={index}>
        <FirstContentCard>
         <img src={refeicoes.prato}/>
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
       </Card>))}
      </CardPai>
     </SecondMainContainer>

     <ThirdMainContainer>
      <h1>Sobremesas</h1>
      <CardPai>
       {dbSobremesas.map((sobremesas,index) => (
        <Card key={index}>
        <FirstContentCard>
         <img src={sobremesas.prato}/>
         <img src={love ? Heart : HeartCheio} onClick={() => setLove(!love)}/>
        </FirstContentCard>
        <p>{sobremesas.title}</p>
        <h2>{sobremesas.value}</h2>
        <InspectValue>
         <button id='increment' onClick={() => increment(card.id)}><img src={DecrementarIcon}/></button>
          <p>01</p>
         <button id='decrement' onClick={() => decrement(card.id)}><img src={AdicionarIcon}/></button>
         <button id='incluir'>incluir</button>
        </InspectValue>
       </Card>))}
      </CardPai>
     </ThirdMainContainer>

     <FordMainContainer>
      <h1>Bebidas</h1>
      <CardPai>
       {dbBebidas.map((bebidas,index) => (
        <Card key={index}>
        <FirstContentCard>
         <img src={bebidas.prato}/>
         <img src={love ? Heart : HeartCheio} onClick={() => setLove(!love)}/>
        </FirstContentCard>
        <p>{bebidas.title}</p>
        <h2>{bebidas.value}</h2>
        <InspectValue>
         <button id='increment' onClick={() => increment(card.id)}><img src={DecrementarIcon}/></button>
          <p>01</p>
         <button id='decrement' onClick={() => decrement(card.id)}><img src={AdicionarIcon}/></button>
         <button id='incluir'>incluir</button>
        </InspectValue>
       </Card>))}
      </CardPai>
     </FordMainContainer>
    </Container>
   </>
  )
}

export default Dashboard