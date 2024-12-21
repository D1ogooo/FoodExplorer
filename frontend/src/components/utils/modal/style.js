import styled from "styled-components"

export const ToastStyle = styled.div`
 position: fixed;
 right: 0;
 top: 0;
 padding-right: 2rem;

 section:nth-child(1) {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: .5rem .5rem;

 svg {
  width: 1.5625rem;
  height: 1.5625rem;
  color:rgb(37, 197, 58);
 }

  p {
    padding-left: 0.2rem;
    font-weight: 500;
    font-size: 1rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
 }

 section:nth-child(2) {
   @keyframes progress {
  to {
    transform: scaleX(1);
  }
 }

  position: absolute;
  left: 0.25rem;
  bottom: 0.25rem;
  width: calc(100% - 0.5rem);
  height: 0.1875rem;
  transform: scaleX(0);
  transform-origin: left;
  background: linear-gradient(to right,rgb(63, 162, 84),rgb(19, 234, 187));
  border-radius: inherit;
  animation: progress 2.5s 0.3s linear;
 }
`