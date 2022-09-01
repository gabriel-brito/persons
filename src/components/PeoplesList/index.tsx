import * as S from 'components/PeoplesList/styles'
import Container from 'components/Container'
// const mock = {
//   name: 'Michael Barton',
//   company: 'PerkinElmer Inc',
//   img: 'https://i.pinimg.com/736x/e6/92/d5/e692d5b339965562babfe6b0b349d278.jpg'
// }

export default function PeoplesList() {
  return (
    <S.Wrapper>
      <Container>
        <S.List>
          <S.ListItem>
            <S.PersonCard>
              <S.InfoWrapper>
                <S.Name>Michael Barton</S.Name>
                <S.Company>
                  <S.CompanyIcon
                    src="assets/svg/buildings-icon.svg"
                    alt="Icon for buildings"
                  />{' '}
                  PerkinElmer Inc
                </S.Company>
              </S.InfoWrapper>

              <S.ProfileWrapper>
                <S.Avatar
                  src="https://i.pinimg.com/736x/e6/92/d5/e692d5b339965562babfe6b0b349d278.jpg"
                  alt="Goku Profile Picture"
                />
              </S.ProfileWrapper>
            </S.PersonCard>
          </S.ListItem>
        </S.List>
      </Container>
    </S.Wrapper>
  )
}
