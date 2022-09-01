import styled from 'styled-components'

export const Wrapper = styled.section`
  margin: 20px auto;
`

export const List = styled.ul``

export const ListItem = styled.li`
  list-style: none;
`

export const PersonCard = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  border: 1px solid #eaeaea;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.h2`
  font-weight: 400;
  font-size: 1.1rem;
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
  width: 18px;
  margin-right: 4px;
  color: #656e7a;
`

export const ProfileWrapper = styled.div`
  border-radius: 50%;
  max-width: 60px;
  overflow: hidden;
  width: 100%;
`

export const Avatar = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`

export const AvatarPlaceholder = styled.span``
