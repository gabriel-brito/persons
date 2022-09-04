import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.section`
  border-bottom: 1px solid #d1d1d1;
  padding: 20px 0;
  width: 100%;
`

export const InternalWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Heading = styled.h1`
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`
const hideIcon = keyframes`
  from {
    background-position: 8px center;
    padding-left: 40px;
  }
  to {
    background-position: -40px center;
    padding-left: 8px;
  }
`

const showIcon = keyframes`
  from {
    background-position: -40px center;
    padding-left: 8px;
  }
  to {
    background-position: 8px center;
    padding-left: 40px;
  }
`

export const Input = styled.input`
  animation: ${showIcon} 0.2s linear;
  background-image: url('/assets/svg/search-icon.svg');
  background-position: 8px center;
  background-repeat: no-repeat;
  background-size: 20px;
  background-color: #eaeaea;
  border-radius: 16px;
  border: none;
  color: #656e7a;
  padding: 8px;
  padding-left: 40px;
  width: 193px;

  &:focus {
    animation: ${hideIcon} 0.2s linear;
    background-position: -40px center;
    padding-left: 8px;
  }

  &:focus-visible {
    outline: none;
  }
`
