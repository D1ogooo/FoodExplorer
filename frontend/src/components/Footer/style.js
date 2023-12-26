import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 width: 100%;
 height: 4.8125rem;
 padding: 1.5rem 7.6875rem;
 align-items: center;
 gap: 0.5rem;
 flex-shrink: 0;
 background: ${({theme}) => theme.colors.Dark.dark600};

 footer {
  display: flex;
  justify-content: space-between;
  :nth-child(1) {
   img {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
    fill: ${({theme}) => theme.colors.Light.light700};
   }

   p {
    color: ${({theme}) => theme.colors.Light.light700};
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
   }
  }

  :nth-child(2) {
   p {
    color: ${({theme}) => theme.colors.Light.light200};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
   }
  }
 }
`