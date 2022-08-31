import * as S from 'components/SearchInput/styles'
import Container from 'components/Container'

export default function SearchInput() {
  return (
    <S.Wrapper>
      <Container>
        <S.InternalWrapper>
          <S.Heading>People's List</S.Heading>
          <S.Input
            type="text"
            aria-label="Search input"
            placeholder="Filter by name"
          />
        </S.InternalWrapper>
      </Container>
    </S.Wrapper>
  )
}
