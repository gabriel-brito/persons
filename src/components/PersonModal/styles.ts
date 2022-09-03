import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid #d1d1d1;
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
  color: #64dd17;
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
  color: #656e7a;
`

export const Footer = styled.header`
  background-color: #eaeaea;
  border-bottom: 1px solid #d1d1d1;
`

export const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`

export const BaseButton = styled.button`
  background-color: white;
  border: 1px solid #d1d1d1;
  cursor: pointer;
  font-weight: 600;
  min-width: 85px;
  padding: 10px 16px;
`

export const DeleteButton = styled(BaseButton)`
  border-color: #ed6a6d;
  color: #ed6a6d;
`
