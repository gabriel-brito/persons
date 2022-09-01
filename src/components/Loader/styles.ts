import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

export const Loader = styled.div`
  animation: ${spin} 2s linear infinite;
  border-radius: 50%;
  border: 5px solid white;
  border-bottom-color: #3498db;
  height: 60px;
  width: 60px;
`
