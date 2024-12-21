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

 
`