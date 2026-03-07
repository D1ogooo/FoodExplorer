import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
 width: min(1200px, 90%);
 margin: 0 auto;
`

export const FirstMainComponent = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 100%;
 min-height: 16rem;
 margin-top: 8rem;
 border-radius: .5rem;
 padding: 1.5rem;

 background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

 @media (max-width: 768px) {
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  padding: 1rem;
 }
`

export const Left = styled.section`
 img {
  width: clamp(180px, 35vw, 500px);
  height: auto;
  margin-top: -6rem;
 }

 @media (max-width: 768px) {
  img {
   margin-top: -4rem;
  }
 }
`

export const Right = styled.section`
 max-width: 420px;

 h1 {
  color: ${({ theme }) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.4rem, 2.5vw, 2.5rem);
  font-weight: 500;
  line-height: 140%;
 }

 p {
  color: ${({ theme }) => theme.colors.Light.light300};
  font-family: 'Roboto', sans-serif;
  font-size: clamp(.8rem, 1.5vw, 1rem);
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
 }
`

export const SecondMainContainer = styled.section`
 display: flex;
 flex-direction: column;
 align-items: start;

 h1 {
  margin-top: 3.9375rem;
  margin-bottom: 1.4375rem;
  color: ${({ theme }) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
 }
`

export const Pai = styled.section`
 display: flex;
 justify-content: space-between;
 width: 100%;

 .button_left { 
  padding: 1.5rem;
  position: absolute;
  margin-top: 12rem;
  margin-left: -6rem;
  img {
   width: 2.5rem;
   height: 2.5rem;
   cursor: pointer;
   flex-shrink: 0;
  }
   background: none;
   border: none;
  }

 .button_right {
  position: right;
  padding: 1.5rem;
  margin-top: -4.5rem;
  margin-left: .1rem;
  img {
   width: 2.5rem;
   height: 2.5rem;
   cursor: pointer;
   flex-shrink: 0;
  }
   background: none;
   border: none;
  }
`
export const ThirdMainContainer = styled.section`
  h1 {
   margin-top: 3.9375rem;
   margin-bottom: 1.4375rem;
   color: ${({ theme }) => theme.colors.Light.light300};
   font-family: 'Poppins', sans-serif;
   font-size: 2rem;
   font-style: normal;
   font-weight: 500;
   line-height: 140%;
  }
`

export const FordMainContainer = styled.section`
  margin-bottom: 6rem;
  
  h1 {
   margin-top: 3.9375rem;
   margin-bottom: 1.4375rem;
   color: ${({ theme }) => theme.colors.Light.light300};
   font-family: 'Poppins', sans-serif;
   font-size: 2rem;
   font-style: normal;
   font-weight: 500;
   line-height: 140%;
  }
`

export const CardPai = styled.div`
 display: flex;
 width: 100%;
 gap: 1.5rem;

 overflow-x: auto;
 scroll-behavior: smooth;

 padding-bottom: 1rem;

  h2 {
  color: ${({ theme }) => theme.colors.Tints.cake200};
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
 }

 &::-webkit-scrollbar {
  display: none;
 }
`

export const Card = styled.div`
 text-decoration: none;
 cursor: pointer;

 display: flex;
 flex-direction: column;
 align-items: center;

 min-width: 260px;
 max-width: 260px;

 border-radius: .5rem;
 background: ${({ theme }) => theme.colors.Dark.dark200};
 border: .0625rem solid ${({ theme }) => theme.colors.Dark.dark300};

 padding: 1rem;
 gap: .75rem;

 h1 {
  color: ${({ theme }) => theme.colors.Light.light300};
  font-family: 'Poppins';
  font-size: 1.2rem;
  font-weight: 600;
 }

 p {
  color: ${({ theme }) => theme.colors.Light.light400};
   font-family: 'Roboto', sans-serif;
  font-size: .85rem;
    font-style: normal;
    font-weight: 400;
    line-height: 22.4px;
    text-align: center;
 }

 img {
  width: 100%;
  height: auto;
 }

 @media (max-width: 768px) {
  min-width: 210px;
  max-width: 210px;
 }
`

export const FirstContentCard = styled(Link)`
  display: flex;
  justify-content: center;
  scroll-behavior: smooth;
  padding: 2px;
  
  #prato {
    width: 100%;
    height: 200px;
    flex-shrink: 0;
  }

  button {
    background: none;
    border: none;
    position: relative;
    left: 0;
    top: 0;
  }
  
  #loveButton {
  }

  :nth-child(2) {
    cursor: pointer;
    width: 1.5rem;
    height: 1.375rem;
    flex-shrink: 0;
    margin-left: -0.75rem;
    margin-top: -0.625rem;
  }
`

export const ImagemPrato = styled(Link)`
 
`
