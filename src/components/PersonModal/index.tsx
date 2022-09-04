import { Dispatch, SetStateAction } from 'react'
import BaseModal from 'components/BaseModal'
import ProfilePicture from 'components/ProfilePicture'
import * as S from 'components/PersonModal/styles'

import { SelectedUserTypes } from 'components/PeoplesList'

type PersonModalTypes = {
  closeModal: Dispatch<SetStateAction<boolean>>
  deleteUser: (id: number) => Promise<void>
  selectedUser: SelectedUserTypes | any
  showModal: boolean
}

export default function PersonModal({
  closeModal,
  deleteUser,
  selectedUser,
  showModal
}: PersonModalTypes) {
  const { company, email, name, phone, picture } = selectedUser
  const hasPhone = phone && phone.length > 0
  const handleCloseModal = () => closeModal(false)
  const handleDeleteUser = () => deleteUser(selectedUser.id)

  return (
    <BaseModal
      title="Person Information"
      showModal={showModal}
      closeModal={closeModal}
      hasFooter
      footerContent={
        <>
          <S.DeleteButton aria-label="delete-person" onClick={handleDeleteUser}>
            Delete
          </S.DeleteButton>
          <S.BaseButton aria-label="close-modal" onClick={handleCloseModal}>
            Back
          </S.BaseButton>
        </>
      }
    >
      <S.ProfileWrapper>
        <ProfilePicture name={name} size={100} picture={picture} />
        <S.Name>{name}</S.Name>
        {hasPhone && <S.Phone>{phone[0].value}</S.Phone>}
      </S.ProfileWrapper>

      <S.InfoWrapper>
        {email && (
          <S.InfoRow>
            <S.InfoTitle>Email</S.InfoTitle>
            <S.InfoContent>{email}</S.InfoContent>
          </S.InfoRow>
        )}

        {company && (
          <S.InfoRow>
            <S.InfoTitle>Organization</S.InfoTitle>
            <S.InfoContent>{company}</S.InfoContent>
          </S.InfoRow>
        )}
      </S.InfoWrapper>
    </BaseModal>
  )
}
