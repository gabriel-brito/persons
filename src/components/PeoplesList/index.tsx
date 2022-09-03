import { useState } from 'react'

import Container from 'components/Container'
import PersonCard from 'components/PersonCard'

import * as S from 'components/PeoplesList/styles'

type PeoplesListType = {
  persons?: any[]
}

export default function PeoplesList({ persons = [] }: PeoplesListType) {
  const [selectedUser, setSelectedUser] = useState<Object>({})
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handlePersonModal = (data: any) => {
    const { id, name, picture_id: picture, phone, primary_email: email } = data
    setSelectedUser({ id, name, picture, phone, email })
    setOpenModal(true)
  }

  return (
    <S.Wrapper>
      <Container>
        <S.List>
          {persons.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            persons.map((data, index) => {
              const { name, org_name: company, picture_id } = data
              const picture = picture_id && picture_id.pictures['128']

              return (
                <S.ListItem key={`${index}-person`}>
                  <PersonCard
                    name={name}
                    company={company}
                    picture={picture}
                    handler={() => handlePersonModal(data)}
                  />
                </S.ListItem>
              )
            })
          )}
        </S.List>
      </Container>
    </S.Wrapper>
  )
}
