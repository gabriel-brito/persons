import * as S from 'components/Header/styles'

export default function Header() {
  return (
    <S.Header data-testid="header">
      <S.logo src="/assets/svg/logo.svg" alt="Pipedrive logo" />
    </S.Header>
  )
}
