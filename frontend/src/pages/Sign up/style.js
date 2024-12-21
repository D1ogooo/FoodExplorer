import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
 height: 100vh;
 width: 90%;
 margin: 0 auto;
 display: flex;
 justify-content: space-around;
 align-items: center;
 flex-wrap: wrap;
`

export const Left = styled.div`
 display: flex;
 gap: 1.1875rem;

 h2 {
  background: ${({ theme }) => theme.colors.Light};
  color: ${({ theme }) => theme.colors.Light.light100};
  font-family: 'Roboto', sans-serif;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
 }
`

export const Form = styled.form`
 display: inline-flex;
 padding: 4rem;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 2rem;

 border-radius: 1rem;
 background: ${({ theme }) => theme.colors.Dark.dark700};

 h1 {
  align-self: stretch;
  color: ${({ theme }) => theme.colors.Light.light100};
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
 }

 input[type='text'],
 input[type='email'],
 input[type='password'] {
  color: ${({ theme }) => theme.colors.Light.light500};
  background: ${({ theme }) => theme.colors.Dark.dark900};
  padding-top: 0.1812rem;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
 }

 div { 
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0.875rem;
  width: 21.75rem;
  height: 3rem;
  margin-top: .5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.Dark.dark900};
 }
 
 label {
  align-self: stretch;
  color: ${({ theme }) => theme.colors.Light.light400};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
 }
`

export const Register = styled.button`
  align-self: stretch;
  cursor: pointer;
  border: none;
  display: flex;
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.3125rem;
  background: ${({ theme }) => theme.colors.Tints.tomato100};
  color: ${({ theme }) => theme.colors.Light.light100};
  text-align: center;
  font-family: 'Poppins',sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 171.429%;
`

export const ReturnLogin = styled(Link)`
  color: #D9D9D9;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
`
