import styled from "styled-components";

export const Container = styled.div`
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
  
  cursor: pointer;
  border: none;
  border-radius: 0.3125rem;
  background: ${({ theme }) => theme.colors.Tints.tomato100};
  color: ${({ theme }) => theme.colors.Light.light100};
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
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

export const Internal = styled.div`
 display: flex;
 gap: 2.6rem;
`