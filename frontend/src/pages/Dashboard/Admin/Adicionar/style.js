import styled from 'styled-components'

export const Title = styled.h1`
 color: ${({ theme }) => theme.colors.Light.light300};
 font-family: sans-serif;
 font-size: 2rem;
 font-style: medium;
 font-weight: 400;
 line-height: 140%;
 margin-bottom: 2rem;
`

export const Content = styled.div`
 display: flex;
 width: 100%;
 flex-direction: column;
 justify-content: center;
`

export const Primeiro = styled.div`
 margin-bottom: 2rem;

 #select_image {
 color: ${({ theme }) => theme.colors.Light.light400};
 font-family: 'Roboto', sans-serif;
 width: 51.685.6875rem;
 font-size: 1.25rem;
 font-style: regular;
 font-weight: 400;
 line-height: 100%;
 
 div {
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.Dark.dark800};
  margin-top: 1rem;
  width: 14.32rem;
  height: 3rem;
  display: flex;
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  input[type="file"]::-webkit-file-upload-button {
   cursor: pointer;
   visibility: hidden;
   position: absolute;
   width: 0;
   height: 0;
   overflow: hidden;
  }

  input[type="file"]::before {
  content: 'Selecionar arquivo';
  visibility: visible;
  display: inline-block;
  position: relative;
  font-weight: 400;
  font-family: 'Trebuchet MS', sans-serif;
  color: ${({ theme }) => theme.colors.Light.light100};
  font-style: medium;
  padding: 0.3125rem 0.9375rem;
  border-radius: 0.3125rem;
  cursor: pointer;
  }
 }
}
`

export const Segundo = styled.div`
width: 100%;

 #declare_name {
 width: 100%;
 color: ${({ theme }) => theme.colors.Light.light400};
 font-family: 'Roboto', sans-serif;
 font-size: 1rem;
 font-style: regular;
 font-weight: 400;
 line-height: 100%;
 
  div {
   width: 100%;  
   border-radius: 0.5rem;
   background: ${({ theme }) => theme.colors.Dark.dark800};
   margin-top: 1rem;
   height: 3rem;
   display: flex;
   padding: 0.75rem 0.875rem;
   justify-content: flex-start;
   align-items: center;
   gap: 0.5rem;
   input {
    color: ${({ theme }) => theme.colors.Light.light400};
    width: 100%;  
    background: none;
    border: none;
   }
 }
}
`

export const Terceiro = styled.div`
 width: 100%;

 #option_categoria {
  color: ${({ theme }) => theme.colors.Light.light400};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: regular;
  font-weight: 400;

  line-height: 100%;
  select {
   border: none;
   border-radius: 0.5rem;
   color: ${({ theme }) => theme.colors.Light.light400};
   background: ${({ theme }) => theme.colors.Dark.dark800};
   margin-top: 1rem;
   height: 3rem;
   display: flex;
   padding: 0.75rem 0.875rem;
   justify-content: center;
   align-items: center;
   gap: 0.5rem;
   
   input {
    color: ${({ theme }) => theme.colors.Light.light400};
    background: none;
    border: none;
   }
  }
 } 
`

export const First = styled.div`
 width: 100%;
 display: flex;
 gap: 2rem;
`

export const Second = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 flex-wrap: wrap;
 gap: 2rem;

 #valor_select {
  p{ 
   margin-top: -0.0625rem;
   margin-bottom: 0.5625rem;
  }
  color: ${({ theme }) => theme.colors.Light.light400};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: regular;
  font-weight: 400;
  margin-top: 2.5rem;
  line-height: 100%;
  div {
   margin-top: 0.125rem;
   border: none;
   border-radius: 0.5rem;
   color: ${({ theme }) => theme.colors.Light.light400};
   background: ${({ theme }) => theme.colors.Dark.dark800};

   height: 4.2rem;
   display: flex;
   padding: 0.75rem 0.875rem;
   justify-content: center;
   align-items: center;
   gap: 0.5rem;
   
   input {
    color: ${({ theme }) => theme.colors.Light.light400};
    background: none;
    border: none;
   }
  }
 }
`

export const MarkContainer = styled.div`
 width: 56.8%;
`

export const TitleMark = styled.h2`
 width: 51.685.6875rem;
 color: ${({ theme }) => theme.colors.Light.light400};
 font-family: sans-serif;
 font-size: 1.25rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
 margin-top: 2rem;
`

export const MarkExternal = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 48px;
  display: flex;
  padding: .5rem .5rem;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.Dark.dark800};
  scroll-behavior: smooth;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
`;

export const CardDefault = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 5px 12px 5px 25px;
  border-radius: 10px;
  background: #262529;
  /* min-width: 6rem; 
  max-width: 15rem;  */
  flex-shrink: 0; 

  
  p {
    color: #FFF;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img {
    background: none;
    border: none;
    width: .7rem;
    height: .7rem;
    color: #FF859B;
    cursor: pointer;
    text-align: center;
    font-family: Material Icons;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Third = styled.div`
 width: 57%;
 margin-top: 2rem;
 margin-bottom: 2rem;

 p {
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.Light.light400};
  font-family: Roboto;
  font-size: 1rem;
  font-style: regular;
  font-weight: 400;
  line-height: 100%;
 }
 
  div {
  display: flex;
  height: 15.75rem;
  padding: 0.875rem;
  align-items: flex-start;
  gap: 0.875rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.Dark.dark800};

  textarea {
   font-size: 15px;
   border: none;
   resize: none;
   background: ${({ theme }) => theme.colors.Dark.dark800};
   color: ${({ theme }) => theme.colors.Light.light400};
  }
 }
`
export const For = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;

  button:nth-child(1){
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
  }
`