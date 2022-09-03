import * as S from 'components/SearchInput/styles'
import Container from 'components/Container'

type SearchInputTypes = {
  handleFilter: any
}

export default function SearchInput({ handleFilter }: SearchInputTypes) {
  return (
    <S.Wrapper>
      <Container>
        <S.InternalWrapper>
          <S.Heading>People's List</S.Heading>
          <S.Input
            onChange={handleFilter}
            type="text"
            aria-label="Search input"
            placeholder="Filter by name"
          />
        </S.InternalWrapper>
      </Container>
    </S.Wrapper>
  )
}
