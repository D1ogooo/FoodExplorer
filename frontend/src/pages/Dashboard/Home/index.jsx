import { useState } from 'react'
import { dbRefeicoes } from '../../../DB/data'
import { dbSobremesas } from '../../../DB/data'
import { dbBebidas } from '../../../DB/data'
import { InspectValue } from '../../../components/Incluir'
import { Container, FirstMainComponent, SecondMainContainer, ThirdMainContainer, FordMainContainer } from './style'
import { CardPai, Card, FirstContentCard } from './style'
import { Left, Right } from './style'
import firstimageIcon from '../../../assets/images/pngegg 1.svg'
import Heart from '../../../assets/icons/Heart vazio.svg'
import HeartCheio from '../../../assets/icons/Heart cheio.svg'

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
       {dbRefeicoes.map((refeicoes) => (
        <Card key={refeicoes.id} to={`/prato/${refeicoes.id}`}>
        <FirstContentCard>
         <img src={refeicoes.prato} id='prato'/>
         <img src={love ? HeartCheio : Heart }
          onClick={(e) => {
             setLove(!love)
            e.preventDefault()
           e.stopPropagation()
          }}/>
         </FirstContentCard>
        <h1>{refeicoes.title}</h1>
        <p>{refeicoes.explicacao}</p>
        <h2>{refeicoes.valor}</h2>
        <InspectValue/>
       </Card>
       ))}
      </CardPai>
     </SecondMainContainer>

     <ThirdMainContainer>
      <h1>Sobremesas</h1>
      <CardPai>
       {dbSobremesas.map((sobremesas) => (
        <Card key={sobremesas.id} to={`/prato/${sobremesas.id}`}>
        <FirstContentCard>
         <img src={sobremesas.prato} id='prato'/>
         <img src={love ? HeartCheio : Heart }
           onClick={(e) => {
             setLove(!love)
            e.preventDefault()
           e.stopPropagation()
           }}/>
         </FirstContentCard>
         <h1>{sobremesas.title}</h1>
        <p>{sobremesas.explicacao}</p>
        <h2>{sobremesas.value}</h2>
        <InspectValue/>
       </Card>
       ))}
      </CardPai>
     </ThirdMainContainer>

     <FordMainContainer>
      <h1>Bebidas</h1>
      <CardPai>
       {dbBebidas.map((bebidas) => (
        <Card key={bebidas.id} to={`/prato/${bebidas.id}`}>
        <FirstContentCard>
         <img src={bebidas.prato} id='prato'/>
         <img src={love ? HeartCheio : Heart }
           onClick={(e) => {
             setLove(!love)
            e.preventDefault()
           e.stopPropagation()
           }}/>
         </FirstContentCard>
        <h1>{bebidas.title}</h1>
        <p>{bebidas.explicacao}</p>
        <h2>{bebidas.value}</h2>
        <InspectValue/>
       </Card>
       ))}
      </CardPai>
     </FordMainContainer>
    </Container>
   </>
  )
}

export default Dashboard