import { BiBuildings as BuildingsIcon } from 'react-icons/bi'
import * as S from 'components/PersonCard/styles'

type PersonCardTypes = {
  name: string
  company: string
  picture?: string
  handler: () => void
}

export default function PersonCard({
  company,
  handler,
  name,
  picture
}: PersonCardTypes) {
  return (
    <S.PersonCard onClick={handler} data-testid="person-card">
      <S.InfoWrapper>
        <S.Name>{name}</S.Name>
        <S.Company>
          <BuildingsIcon /> {company}
        </S.Company>
      </S.InfoWrapper>

      <S.ProfileWrapper>
        {picture ? (
          <S.Avatar src={picture} alt={`${name} Profile Picture`} />
        ) : (
          <S.AvatarPlaceholder data-testid="placeholder">
            {name.charAt(0)}
          </S.AvatarPlaceholder>
        )}
      </S.ProfileWrapper>
    </S.PersonCard>
  )
}
