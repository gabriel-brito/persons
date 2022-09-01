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
`

export const CompanyIcon = styled.img`
  color: #656e7a;
  margin-right: 4px;
  width: 18px;
`

export const ProfileWrapper = styled.div`
  border-radius: 50%;
  height: 60px;
  overflow: hidden;
  width: 60px;
`

export const Avatar = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`

export const AvatarPlaceholder = styled.span`
  align-items: center;
  background-color: aliceblue;
  color: blue;
  display: flex;
  font-size: 1.3rem;
  height: 60px;
  justify-content: center;
  width: 60px;
`
