import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--borderColor);
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 15px 0 25px;
`

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 10px auto 5px;
`

export const Phone = styled.span`
  color: var(--green);
  font-size: 16px;
  font-weight: 600;
`

export const InfoWrapper = styled.div`
  min-height: 150px;
`

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 4fr 8fr;
  grid-gap: 20px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    grid-gap: 0px;
  }
`

export const InfoTitle = styled.p`
  text-align: right;
  font-weight: 600;
`

export const InfoContent = styled.p`
  color: var(--textGrey);
  text-align: left;
`

export const BaseButton = styled.button`
  background-color: white;
  border: 1px solid var(--borderColor);
  cursor: pointer;
  font-weight: 600;
  min-width: 85px;
  padding: 10px 16px;
`

export const DeleteButton = styled(BaseButton)`
  border-color: var(--red);
  color: var(--red);
`
