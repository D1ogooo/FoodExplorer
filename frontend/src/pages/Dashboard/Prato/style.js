import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PaiContainer = styled.div`
 width: 90%;
 margin: 0 auto;
`

export const Container = styled.form`
 display: flex;
 justify-content: center;
 flex-direction: column;
`

export const Return = styled(Link)`
 text-decoration: none;
 display: flex;
 margin-top: 1.625rem;
 margin-bottom: 2.625rem;
 
 img {
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
 }
 p {
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 140%;
 }
`

export const Principal = styled.section`
 display: flex;
 gap: 2.9375rem;
 justify-content: center;
`


export const Left = styled.section`
 
 img {
  width: 100%;
  height: 389px;
  flex-shrink: 0;
 }
`

export const Right = styled.section`
 display: flex;
 width: 687px;
 flex-direction: column;
 align-items: flex-start;
 gap: 24px;

 h1 {
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-style: medium;
  font-weight: 500;
  line-height: 140%;
 }

 p {
  align-self: stretch;
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-style: regular;
  font-weight: 300;
  line-height: 140%;
 }
`

export const Ingredientes = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 0.75rem;
 margin-bottom: 48px;

 div {
  border-radius: 0.3125rem;
  background: ${({theme}) => theme.colors.Dark.dark1000};
  padding: 0.25rem 0.5rem;
  display: flex;
  gap: 0.75rem;
  
  p {
   color: ${({theme}) => theme.colors.Light.light100};
   text-align: center;
   font-family: 'Poppins', sans-serif;
   font-size: 1.25rem;
   font-style: medium;
   font-weight: 100;
   line-height: 171.429%;
  }
 }
`
