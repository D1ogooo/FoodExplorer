import styled from 'styled-components'

export const Container = styled.div`
 width: 90%;
 margin: 0 auto;
`

export const FirstMainComponent = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-around;
 width: 100%;
 height: 16.25rem;
 margin-top: 10.25rem;
 border-radius: 0.5rem;
 flex-shrink: 0;
 background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
`

export const Left = styled.section`
 img {
  margin-top: -8.875rem;
  width: 39.5rem;
  height: 25.375rem;
  flex-shrink: 0;
 }
`

export const Right = styled.section`
 h1 {
  width: 26.375rem;
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
 }

 p {
  width: 26.125rem;
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
 }
`

export const SecondMainContainer = styled.section`
 h1 {
  margin-top: 3.9375rem;
  margin-bottom: 1.4375rem;
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
 }
`

export const CardPai = styled.div`
 margin-bottom: 2.9375rem;

 h2 {
  color: ${({theme}) => theme.colors.Tints.cake200};
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
 }
`

export const Card = styled.div`
 display: flex;
 width: 19rem;
 height: 28.875rem;
 padding: 1.5rem;
 flex-direction: column;
 text-align: center;
 align-items: center;
 gap: 0.9375rem;
 border-radius: 0.5rem;
 background: ${({theme}) => theme.colors.Dark.dark200};
 border: 0.0625rem solid ${({theme}) => theme.colors.Dark.dark300};

 p {
  color: ${({theme}) => theme.colors.Light.light400};
  flex: 1 0 0;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
 }
`

export const FirstContentCard = styled.div`
 display: flex;
 
 :first-child {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
 }

 :nth-child(2) {
  cursor: pointer;
  width: 24px;
  height: 22px;
  flex-shrink: 0;
  margin-left: -12px;
  margin-top: -10px;
 }
`

export const InspectValue = styled.div`
 display: flex;
 align-items: center;
 gap: 2.6rem;
 width: 100%;
 
 p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
 }
 
 #incluir {
  display: flex;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 0.3125rem;
  background: ${({theme}) => theme.colors.Tints.tomato100};
  color: ${({theme}) => theme.colors.Light.light100};
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 171.429%;
 }

 #decrement {
  cursor: pointer;
  background: none;
  border: none;
 }

 #increment {
  cursor: pointer;
  background: none;
  border: none;
 }
`