import { AiOutlineClose as CloseIcon } from 'react-icons/ai'
import Backdrop from 'components/Backdrop'
import * as S from 'components/BaseModal/styles'

export default function BaseModal() {
  return (
    <Backdrop>
      <S.Modal>
        <S.Header>
          <S.HeaderWrapper>
            <S.Title>Person information</S.Title>

            <S.CloseButton aria-label="close">
              <CloseIcon />
            </S.CloseButton>
          </S.HeaderWrapper>
        </S.Header>

        <S.Content>Hello Content</S.Content>
      </S.Modal>
    </Backdrop>
  )
}
