import { Dispatch, SetStateAction } from 'react'

import BaseModal from 'components/BaseModal'

import * as S from 'components/MessageModal/styles'

type MessageModalTypes = {
  closeModal: Dispatch<SetStateAction<boolean>>
  message: string
  showModal: boolean
  title: string
}

export default function MessageModal({
  closeModal,
  showModal,
  title,
  message
}: MessageModalTypes) {
  return (
    <BaseModal closeModal={closeModal} title={title} showModal={showModal}>
      <S.Message>{message}</S.Message>
    </BaseModal>
  )
}
