import styled from 'styled-components'

export const Container = styled.div`
 width: 90%;
 margin: 0 auto;
`

export const PratosContent = styled.section`
 width: 100%;
 gap: 48px;
 display: flex;
 flex-wrap: wrap;
`

export const Content = styled.div`
 display: flex;
 padding: 1rem 0rem;
 align-items: center;
 gap: 0.8125rem;
`

export const Pai = styled.div`
 h1 {
  margin-top: 2.125rem;
  margin-bottom: 2rem;
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-style: medium;
  font-weight: 400;
  line-height: 140%;
 }
`

export const Left = styled.div`
 img {
  width: 6.25rem;
  height: 6.25rem;
  flex-shrink: 0;
 }
`

export const Right = styled.div`
 h2 {
  color: ${({theme}) => theme.colors.Light.light300};
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  font-style: medium;
  font-weight: 200;
  line-height: 160%;
 }

 button {
  cursor: pointer;
  border: none;
  background: none;
  color: ${({theme}) => theme.colors.Tints.tomato400};
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-style: regular;
  font-weight: 400;
  line-height: 160%;
 }
`