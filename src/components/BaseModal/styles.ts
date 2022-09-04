import styled from 'styled-components'

export const Modal = styled.div`
  background-color: white;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.24);
  color: initial;
  max-width: 420px;
  width: 100%;
`

export const Header = styled.header`
  background-color: var(--bgGrey);
  border-bottom: 1px solid var(--borderColor);
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
export const Footer = styled.footer`
  background-color: var(--bgGrey);
  border-bottom: 1px solid var(--borderColor);
`

export const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`
