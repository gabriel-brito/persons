import { ReactNode } from 'react'
import { AiOutlineClose as CloseIcon } from 'react-icons/ai'

import Backdrop from 'components/Backdrop'
import * as S from 'components/BaseModal/styles'

type BaseModalTypes = {
  title: string
  children: ReactNode
  closeModal: (state: boolean) => void
}

export default function BaseModal({
  title,
  children,
  closeModal
}: BaseModalTypes) {
  const handleCloseModal = () => closeModal(false)

  return (
    <Backdrop>
      <S.Modal data-testid="base-modal">
        <S.Header>
          <S.HeaderWrapper>
            <S.Title>{title}</S.Title>

            <S.CloseButton aria-label="close" onClick={handleCloseModal}>
              <CloseIcon />
            </S.CloseButton>
          </S.HeaderWrapper>
        </S.Header>

        <S.Content>{children}</S.Content>
      </S.Modal>
    </Backdrop>
  )
}
