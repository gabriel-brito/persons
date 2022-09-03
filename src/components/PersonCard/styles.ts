import styled from 'styled-components'

export const PersonCard = styled.div`
  align-items: center;
  border: 1px solid #eaeaea;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 4px;
`

export const Company = styled.h3`
  align-items: center;
  color: #656e7a;
  display: flex;
  font-size: 0.9rem;
  font-weight: 400;

  & > svg {
    fill: black;
    font-size: 16px;
    margin-right: 5px;
  }
`
