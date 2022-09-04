import styled from 'styled-components'

export const Modal = styled.div`
  background-color: white;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.24);
  color: initial;
  max-width: 420px;
  width: 100%;
`

export const Header = styled.header`
  background-color: #f2f2f2;
  border-bottom: 1px solid #d1d1d1;
`

export const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`

export const Title = styled.h3`
  font-weight: 600;
`

export const CloseButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;

  & > svg {
    font-size: 24px;
  }
`

export const Content = styled.div`
  padding: 20px;
`
