import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`

export const InvisibleBrick = styled.div`
  width: 30px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 30px;

  & > svg {
    font-size: 24px;
  }
`

export const CurrentPage = styled.span``
