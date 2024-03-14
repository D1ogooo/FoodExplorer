import styled from 'styled-components'

export const Button = styled.button`
 background-color: ${({theme}) => theme.colors.Tints.tomato400};
 color: ${({theme}) => theme.colors.Light.light100};
 display: flex;
 padding: 0.75rem 1.5rem;
 justify-content: center;
 align-items: center; 
 cursor: pointer;
 border: none;
 border-radius: 0.3125rem;
 text-align: center;
 font-size: 0.875rem;
 font-style: normal;
 font-weight: 700;
 line-height: 171.429%;
`