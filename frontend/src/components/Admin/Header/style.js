import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
 width: 100%;
 padding: 1.5rem 7.6875rem;
 background: ${({ theme }) => theme.colors.Dark.dark600};

 header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
 }
`

export const ButtonNovoPrato = styled(Link)`
 cursor: pointer;
 text-decoration: none; 
 display: flex;
 width: 13.5rem;
 padding: 0.75rem 2rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;
 flex-shrink: 0;
 color: ${({ theme }) => theme.colors.Light.light100};
 text-align: center;
 font-family: 'Poppins';
 font-size: 0.875rem;
 font-style: normal;
 font-weight: 500;
 line-height: 1.5rem;
 border-radius: 0.3125rem;
 border: none;
 background: ${({ theme }) => theme.colors.Tints.tomato100};
`

export const StateUser = styled.div`
 h4 {
  color: ${({ theme }) => theme.colors.Tints.cake200};
  font-family: 'Roboto', sans-serif;
  font-size: 13.2px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
 }
`

export const Logo = styled(Link)`
 display: flex;
 align-items: center;
 gap: 0.625rem;
 text-decoration: none;

 img {
  width: 2rem;
  height: 2rem;
 }

 p {
  color: ${({ theme }) => theme.colors.Light.light100};
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
 }
`

export const Search = styled.div`
 display: flex;
 height: 3.4375rem;
 padding: 0.75rem 0.875rem;
 justify-content: center;
 align-items: center;
 gap: 0.875rem;
 flex: 1 0 0;
 border-radius: 0.3125rem;
 background: ${({ theme }) => theme.colors.Dark.dark900};

 input {
  width: 100%;
  height: 3.4375rem;
  color: ${({ theme }) => theme.colors.Light.light500};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  border-radius: 0.3125rem;
  border: none;
  background: ${({ theme }) => theme.colors.Dark.dark900};
 }

 div {
  width: 80%;
  height: 3.4375rem;
  display: flex;
  gap: 0.875rem;
  justify-content: center;
  align-items: center;
 }
`

export const ButtonPedidos = styled(Link)`
 display: flex;
 align-items: center;
 text-decoration: none;
 gap: 0.5rem;
 background: none;
 border: none;
 width: 13.5rem;
 padding: 0.75rem 2rem;
 justify-content: center;

 border-radius: 0.3125rem;
 background-color: ${({ theme }) => theme.colors.Tints.tomato100};
 color: ${({ theme }) => theme.colors.Light.light300};
 cursor: pointer;
 text-align: center;
 font-family: 'Poppins', sans-serif;
 font-size: 0.875rem;
 font-style: normal;
 font-weight: 500;
 line-height: 171.429%;
 
 img {
  width: 2rem;
  height: 2rem;
 }
`

export const ButtonLoggout = styled(Link)`
 background: none;
 border: none;
 cursor: pointer;
 
 img {
  width: 2rem;
  height: 2rem;
 }

 img:hover {
  transition: 2ms all;
  width: 2.2rem;
  height: 2.2rem;
 }
`

export const Favoritos = styled(Link)`
 text-decoration: none;
 p {
  color: ${({ theme }) => theme.colors.Light.light300};
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: small;
  font-weight: 400;
  line-height: 100%;
 }
`