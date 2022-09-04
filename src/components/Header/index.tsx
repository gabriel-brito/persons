import { lazy, useState } from 'react'
import { AiOutlinePlus as PlusIcon } from 'react-icons/ai'
import Container from 'components/Container'

import * as S from 'components/Header/styles'

const AddPersonModal = lazy(() => import('components/AddPersonModal'))
const MessageModal = lazy(() => import('components/MessageModal'))

export default function Header() {
  const [showModal, setShowModal] = useState(false)
  const [showMessageModal, setShowMessageModal] = useState(false)
  const handleAddPersonModal = () => setShowModal(!showModal)
  const [messageModalData, setMessageModalData] = useState({
    message: '',
    title: ''
  })
  const handleResponse = (success: boolean) => {
    handleAddPersonModal()
    setShowMessageModal(true)

    if (success) {
      setMessageModalData({
        title: 'Success!',
        message: 'The person has been added'
      })
    } else {
      setMessageModalData({
        title: 'Something went wrong.',
        message: 'Please, try again in a few seconds.'
      })
    }
  }

  return (
    <S.Header data-testid="header">
      <Container>
        <S.HeaderWrapper>
          <S.Logo src="/assets/svg/logo.svg" alt="Pipedrive logo" />

          <S.AddButton
            aria-label="add-new-person"
            onClick={handleAddPersonModal}
          >
            <PlusIcon /> Add Person
          </S.AddButton>
        </S.HeaderWrapper>
      </Container>

      <AddPersonModal
        showModal={showModal}
        closeModal={handleAddPersonModal}
        handleResponse={handleResponse}
      />
      <MessageModal
        showModal={showMessageModal}
        closeModal={setShowMessageModal}
        {...messageModalData}
      />
    </S.Header>
  )
}
