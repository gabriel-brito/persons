import { useState, lazy } from 'react'

import Container from 'components/Container'
import PersonCard from 'components/PersonCard'
import Loader from 'components/Loader'

import * as S from 'components/PeoplesList/styles'

import { PaginationTypes } from 'components/Pagination'
import { deletePerson } from 'services/persons'

const PersonModal = lazy(() => import('components/PersonModal'))
const MessageModal = lazy(() => import('components/MessageModal'))
const Pagination = lazy(() => import('components/Pagination'))

type PeoplesListType = {
  persons?: any[]
  generalRequest: () => Promise<void>
  isFromFilter: boolean
  paginationParams: PaginationTypes
}

export type SelectedUserTypes = {
  company: string
  email: string
  id: number
  name: string
  phone?: { value: string }[]
  picture?: string
}

export default function PeoplesList({
  generalRequest,
  isFromFilter = false,
  paginationParams,
  persons = []
}: PeoplesListType) {
  const [selectedUser, setSelectedUser] = useState<SelectedUserTypes | {}>({})
  const [openModal, setOpenModal] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const [openMessageModal, setOpenMessageModal] = useState(false)
  const [messageModalData, setMessageModalData] = useState({
    message: '',
    title: ''
  })

  const handlePersonModal = (data: any) => {
    const {
      id,
      name,
      picture_id: picture,
      phone,
      primary_email: email,
      org_name: company
    } = data
    setSelectedUser({ id, name, picture, phone, email, company })
    setOpenModal(true)
  }

  const handleDeletePerson = async (id: number) => {
    setShowLoader(true)

    const { success } = await deletePerson(id)

    if (success) {
      setOpenModal(false)
      setOpenMessageModal(true)
      setMessageModalData({
        title: 'Success!',
        message: 'The person has been deleted'
      })
    } else {
      setOpenMessageModal(true)
      setMessageModalData({
        title: 'Something went wrong.',
        message: 'Please, try again in a few seconds.'
      })
    }

    setShowLoader(false)
  }

  const handleMessageModal = async () => {
    setShowLoader(true)

    await generalRequest()

    setOpenMessageModal(false)
    setShowLoader(false)
  }

  return (
    <S.Wrapper>
      <Container>
        <S.List>
          {persons.length === 0 ? (
            <S.Loading>
              {isFromFilter ? 'Nothing was found.' : 'Loading...'}
            </S.Loading>
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

        {persons.length === 10 && <Pagination {...paginationParams} />}

        <PersonModal
          showModal={openModal}
          closeModal={setOpenModal}
          selectedUser={selectedUser}
          deleteUser={handleDeletePerson}
        />

        <MessageModal
          closeModal={handleMessageModal}
          showModal={openMessageModal}
          {...messageModalData}
        />

        <Loader showLoader={showLoader} />
      </Container>
    </S.Wrapper>
  )
}
