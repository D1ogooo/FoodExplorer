import styled from "styled-components";

export const Container = styled.div`
 width: 90%;
 margin: 0 auto;
`

export const Pai = styled.section`
 display: flex;
 justify-content: space-around;
 flex-wrap: wrap;

 @media (max-width:62.5rem) {
  margin-bottom: 290px;
 }
`

export const Left = styled.section`
width: 30rem;
 margin-top: 2.125rem;
 margin-bottom: 2rem;
 h1 {
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
 }

 .totalValue {
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Poppins',sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
 }
`

export const Right = styled.section`
 :nth-child(2) {
  display: flex;
  cursor: pointer;
 }

 :nth-child(1) {
  border-radius: 8px 0px 0px 0px;
  cursor: pointer;
 }
 
 h1 {
  margin-top: 2.125rem;
  margin-bottom: 2rem;
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
 }

 button { 
  display: flex;
  height: 81px;
  padding: 12px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 0px 8px 0px 0px;
  border-top: 1px solid ${({theme}) => theme.colors.Light.light600};
  border-right: 1px solid ${({theme}) => theme.colors.Light.light600};
  border-left: 1px solid ${({theme}) => theme.colors.Light.light600};
  background: ${({theme}) => theme.colors.Dark.dark500};
  
  color: ${({theme}) => theme.colors.Light.light100};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
 }
`

export const CardContent = styled.div`
 height: 490px;
 overflow-y: auto;
 overflow-x: hidden;
`

export const Card = styled.div`
 display: flex;
 width: 403px;
 padding: 16px 0rem;
 align-content: center;
 gap: 13px;

 :nth-child(3) {
  margin-top: .325rem;
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-style: regular;
  font-weight: 500;
  line-height: 160%;
 }
`

export const First = styled.div`
 img {
  width: 100px;
  height: 100px;
  flex-shrink: 0;
 }
`

export const Second = styled.div`
 display: flex;
 flex-direction: column;
 :nth-child(1) {
  align-items: start;
 }

 p {
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%
 }

 span {
  color: ${({theme}) => theme.colors.Light.light400};
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: regular;
  font-weight: 400;
  line-height: 160%;
 }
`

export const ButtonExcluir = styled.button`
 cursor: pointer;
 color: ${({theme}) => theme.colors.Tints.tomato400};
 background: none;
 border: none;
 font-family: 'Roboto', sans-serif;
 font-size: 12px;
 font-style: normal;
 font-weight: 400;
 line-height: 160%;
`

export const CardPagamento = styled.div`
 display: flex;
 width: 530px;
 cursor: default;
 height: 400px;
 padding: 47px 130px;
 justify-content: center;
 align-items: center;
 flex-shrink: 0;
 border-radius: 0px 0px 8px 8px;
 border: 1px solid ${({theme}) => theme.colors.Light.light600};

 button {
  display: flex;
  height: 81px;
  padding: 12px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
 }

 div {
  img {
    cursor: all-scroll;
  }
 }
`

export const Form = styled.form`
 display: flex;
 flex-direction: column;
 font-family: 'Poppins', sans-serif;
 cursor: default;

 button[type='submit']{
  display: flex;
  cursor: pointer;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 5px;
  opacity: 0.8;
  border: none;

  background: ${({theme}) => theme.colors.Tints.tomato100};
  color: ${({theme}) => theme.colors.Light.light100};
  text-align: center;
  font-size: .875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 171.429%;
 }

 input[type='text']{
  background: none;
  border: none;
  color: ${({theme}) => theme.colors.Light.light100};
  font-family: 'Roboto';
  font-size: 1rem;
  font-style: regular;
  font-weight: 400;
  line-height: 100%;
  cursor: text;
 }

 div { 
  cursor: default;
  border: 1px solid ${({theme}) => theme.colors.Light.light100};
  display: flex;
  width: 100%;
  height: 48px;
  padding: 12px 14px;
  gap: 14px;
 }
 
 label {
  cursor: default;
  color: ${({theme}) => theme.colors.Light.light400};
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.2rem;
 }

 #text_number_card {
  margin-bottom: 37px;
  cursor: default;
 }

 .info_card {
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.0625rem;
 }
 
`