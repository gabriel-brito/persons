import * as S from 'components/PeoplesList/styles'
import Container from 'components/Container'
import PersonCard from 'components/PersonCard'

type PeoplesListType = {
  persons?: any[]
}

export default function PeoplesList({ persons = [] }: PeoplesListType) {
  return (
    <S.Wrapper>
      <Container>
        <S.List>
          {persons.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            persons.map((data, index) => {
              const { name, org_name: company, picture_id } = data
              const picture = picture_id && picture_id.pictures['128']

              return (
                <S.ListItem key={`${index}-person`}>
                  <PersonCard
                    name={name}
                    company={company}
                    picture={picture}
                    handler={() => console.log('here')}
                  />
                </S.ListItem>
              )
            })
          )}
        </S.List>
      </Container>
    </S.Wrapper>
  )
}
