import { useState } from 'react'
import { Container, Pai, CardContent, Card } from './style'
import { Left, Right, First, Second, ButtonExcluir } from './style'
import { CardPagamento } from './style'
import { Form } from './style'
import exemploPrato from '../../../assets/pratos/molla.svg'
import pixIcon from '../../../assets/icons/PIX.svg'
import creditIcon from '../../../assets/icons/CreditCard.svg'
import qrcodeIcon from '../../../assets/icons/qrcode pix.svg'
import receitaIcon from '../../../assets/icons/Receipt.svg'

function Pedidos() {
  const [image, setImage] = useState(false)
  function handleImage (id) {
    if (id == 0){
      setImage(true)
    }else {
      setImage(false)
    }
  }

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
           <p>1 x  Salada Radish</p>
           <div>
           <ButtonExcluir>
            Excluir
           </ButtonExcluir>
           </div>
          </Second>
           <span>
            R$ 25,97
           </span>
         </Card>
         <Card>
          <First>
           <img src={exemploPrato}/>
          </First>
          <Second>
           <p>1 x  Salada Radish</p>
           <div>
           <ButtonExcluir>
            Excluir
           </ButtonExcluir>
           </div>
          </Second>
           <span>
            R$ 25,97
           </span>
         </Card>
         <Card>
          <First>
           <img src={exemploPrato}/>
          </First>
          <Second>
           <p>1 x  Salada Radish</p>
           <div>
           <ButtonExcluir>
            Excluir
           </ButtonExcluir>
           </div>
          </Second>
           <span>
            R$ 25,97
           </span>
         </Card>
         <Card>
          <First>
           <img src={exemploPrato}/>
          </First>
          <Second>
           <p>1 x  Salada Radish</p>
           <div>
           <ButtonExcluir>
            Excluir
           </ButtonExcluir>
           </div>
          </Second>
           <span>
            R$ 25,97
           </span>
         </Card>
        </CardContent>
       <span className='totalValue'>Total: R$ 103,88</span>
      </Left>
      <Right>
       <h1>Pagamento</h1>
         <div>
         <button onClick={() => handleImage(0)}>
          <img src={pixIcon}/>
          <p>PIX</p>
         </button>
         <button onClick={() => handleImage(1)}>
          <img src={creditIcon}/>
          <p>Crédito</p>
         </button>
         </div>
       <CardPagamento>
      {image ? 
       <div>
        <img src={qrcodeIcon}/>
       </div> 
        : 
      <Form>
        <label id="text_number_card">Número do Cartão
         <div>
          <input type="text" placeholder='0000 0000 0000 0000'/>
         </div>
        </label>

       <section className='info_card'>
        <label id="Seu nome">Validade
         <div>
          <input type="text" placeholder="04/25"/>
         </div>
        </label>

         <label id="Seu nome">CVC
          <div>
           <input type="text" placeholder="000"/>
          </div>
         </label>
        </section>
        <button type="submit" onClick={(e) => e.preventDefault()}>
         <img src={receitaIcon}/>
         Finalizar pagamento
        </button>
       </Form>}
      </CardPagamento>
     </Right>
    </Pai>
   </Container>
  </>
 )
}

export default Pedidos