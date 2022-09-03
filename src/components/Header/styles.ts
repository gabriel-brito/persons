import styled from 'styled-components'

export const Header = styled.header`
  align-items: center;
  background-color: #2a3647;
  display: flex;
  padding: 20px 0;
`

export const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.img``

export const AddButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 1px solid white;
  cursor: pointer;
  color: white;
  display: flex;
  font-weight: 600;
  padding: 10px 16px;
  text-transform: uppercase;
  width: 150px;

  & > svg {
    font-size: 16px;
    margin-right: 8px;
  }
`
