import ravanello from '../src/assets/pratos/ravanello.svg'
import gambe from '../src/assets/pratos/gambe.svg'
import parma from '../src/assets/pratos/parma.svg'
import molla from '../src/assets/pratos/molla.svg'
import dish from '../src/assets/pratos/Dish.svg'
import macaron from '../src/assets/pratos/macaron sobremesa.svg'
import pastry from '../assets/pratos/pastry sobremesa.svg'
import prugna from '../assets/pratos/prune sobremesa.svg'
import espresso from '../src/assets/pratos/expresso.svg'
import sucomaracuja from '../src/assets/pratos/suco de maracuja.svg'
import tedautnno from '../src/assets/pratos/Tè dautunno.svg'

export const dbRefeicoes = [
 {
  title: 'Salada de Ravanello >',
  prato: `${ravanello}`,
  explicacao: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
  valor: 'R$ 49,97',
 },
 {
  title: 'Spaguetti Gambe >',
  prato: `${gambe}`,
  explicacao: 'Massa fresca com camarões e pesto.',
  valor: 'R$ 79,97',
 },
 {
  title: 'Torradas de Parma >',
  prato: `${parma}`,
  explicacao: 'Presunto de parma e rúcula em um pão com fermentação natural.',
  valor: 'R$ 25,97',
 },
 {
  title: 'Salada de Molla >',
  prato: `${molla}`,
  explicacao: 'Originado das profundezas das florestas tropicais, este prato é uma combinação harmoniosa de ingredientes locais',
  valor: 'R$ 30,97',
 },
]

export const dbSobremesas = [
 {
  title: 'Prugna Pie >',
  prato: `${prugna}`,
  explicacao: 'Torta de ameixa com massa amanteigada, polvilho em açúcar.',
  valor: 'R$ 79,97',
 },
 {
  title: 'Peachy pastrie >',
  prato: `${pastry}`,
  explicacao: 'Delicioso folheado de pêssego com folhas de hortelã.',
  valor: 'R$ 32,97',
 },
 {
  title: 'Macarons >',
  prato: `${macaron}`,
  explicacao: 'Farinha de amêndoas, manteiga, claras e açúcar.',
  valor: 'R$ 79,97',
 },
 {
  title: 'Bolo de dish >',
  prato: `${dish}`,
  explicacao: 'O Bolo Refrescante de Dish é uma obra-prima da confeitaria, onde a suavidade da massa encontra a intensidade dos damascos frescos.',
  valor: 'R$ 25,97',
 },
]

export const dbBebidas = [
 {
  title: 'Espresso >',
  prato: `${espresso}`,
  explicacao: 'Café cremoso feito na temperatura e pressões perfeitas.',
  valor: 'R$ 15,97',
 },
 {
  title: 'Suco de maracujá >',
  prato: `${sucomaracuja}`,
  explicacao: 'Suco de maracujá gelado, cremoso, docinho.',
  valor: 'R$ 13,97',
 },
 {
  title: 'Tè dautunno >',
  prato: `${tedautnno}`,
  explicacao: 'Chá de anis, canela e limão. Sinta o outono italiano.',
  valor: 'R$ 19,97',
 },
]