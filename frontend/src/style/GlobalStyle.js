import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 ::-webkit-scrollbar {
  width: 0.25rem;
  transition: 0.3s all;
 }

 ::-webkit-scrollbar-track {
  background-color: #2c2c31;
 }

::-webkit-scrollbar-thumb {
  background-color: #081D25;
  border-radius: 0.625rem;
}
 
 html {
  scroll-behavior: smooth;
 }
 
 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }

 body {
  background: ${({ theme }) => theme.colors.Dark.dark400};
 } 
`