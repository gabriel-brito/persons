import styled from 'styled-components'

export const Backdrop = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  color: white;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1201;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`
