import { ReactNode } from 'react'
import { AiOutlineClose as CloseIcon } from 'react-icons/ai'

import Backdrop from 'components/Backdrop'
import * as S from 'components/BaseModal/styles'

type BaseModalTypes = {
  children: ReactNode
  footerContent?: ReactNode
  hasFooter?: boolean
  closeModal: (state: boolean) => void
  showModal: boolean
  title: string
}

export default function BaseModal({
  children,
  footerContent,
  hasFooter = false,
  showModal,
  title,
  closeModal
}: BaseModalTypes) {
  const handleCloseModal = () => closeModal(false)

  return showModal ? (
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

        {hasFooter && <>{footerContent}</>}
      </S.Modal>
    </Backdrop>
  ) : null
}
