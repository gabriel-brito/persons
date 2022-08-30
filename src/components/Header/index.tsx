import * as S from 'components/Header/styles'
import Container from 'components/Container'

export default function Header() {
  return (
    <S.Header data-testid="header">
      <Container>
        <S.Logo src="/assets/svg/logo.svg" alt="Pipedrive logo" />
      </Container>
    </S.Header>
  )
}
