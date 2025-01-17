import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
 width: 80%;
 margin: 0 auto;
`

export const FirstMainComponent = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-around;
 width: 100%;
 height: 16.25rem;
 margin-top: 10.25rem;
 border-radius: .5rem;
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
  color: ${({ theme }) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
 }

 p {
  width: 26.125rem;
  color: ${({ theme }) => theme.colors.Light.light300};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
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
 scroll-behavior: smooth;
 
 overflow-x: auto;
 overflow: hidden;
 
 align-items: start;
 justify-content: start;
 margin-bottom: 2.9375rem;
 gap: 27px;

 h2 {
  color: ${({ theme }) => theme.colors.Tints.cake200};
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
 }
`

export const Card = styled.div`
  & {
    text-decoration: none;
    cursor: pointer;
  }

  display: flex;
  width: 19rem;
  height: auto;
  flex-direction: column;
  text-align: center;
  gap: .9375rem;
  border-radius: .5rem;
  background: ${({ theme }) => theme.colors.Dark.dark200};
  border: .0625rem solid ${({ theme }) => theme.colors.Dark.dark300};
  padding: 1rem;

  h1 {
    margin-top: -0.0625rem;
    color: ${({ theme }) => theme.colors.Light.light300};
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 33.6px;
  }

  p {
    color: ${({ theme }) => theme.colors.Light.light400};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.4px;
  }

  img {
    max-width: 100%; 
    height: auto; 
    flex-shrink: 0;
    margin-bottom: 1rem; 
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: visible;
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