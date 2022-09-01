import * as S from 'components/PeoplesList/styles'
import Container from 'components/Container'
import PersonCard from 'components/PersonCard'

const mock = [
  {
    name: 'Michael Barton',
    company: 'PerkinElmer Inc',
    picture:
      'https://i.pinimg.com/736x/e6/92/d5/e692d5b339965562babfe6b0b349d278.jpg',
    handler: () => console.log('here')
  },
  {
    name: 'John Barton',
    company: 'John Inc',
    picture: 'https://placehold.jp/269x128.png',
    handler: () => console.log('here')
  },
  {
    name: 'Jane Barton',
    company: 'Jane Inc',
    handler: () => console.log('here')
  }
]

export default function PeoplesList() {
  return (
    <S.Wrapper>
      <Container>
        <S.List>
          {mock.map((data, index) => (
            <S.ListItem key={`${index}-person`}>
              <PersonCard {...data} />
            </S.ListItem>
          ))}
        </S.List>
      </Container>
    </S.Wrapper>
  )
}
