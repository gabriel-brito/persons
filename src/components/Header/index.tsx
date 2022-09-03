import { AiOutlinePlus as PlusIcon } from 'react-icons/ai'
import Container from 'components/Container'

import * as S from 'components/Header/styles'

export default function Header() {
  return (
    <S.Header data-testid="header">
      <Container>
        <S.HeaderWrapper>
          <S.Logo src="/assets/svg/logo.svg" alt="Pipedrive logo" />

          <S.AddButton aria-label="add-new-person">
            <PlusIcon /> Add Person
          </S.AddButton>
        </S.HeaderWrapper>
      </Container>
    </S.Header>
  )
}
