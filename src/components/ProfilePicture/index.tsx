import * as S from 'components/ProfilePicture/styles'

type ProfilePictureTypes = {
  picture?: string
  name: string
  size?: number
}

export default function ProfilePicture({
  picture,
  name,
  size = 60
}: ProfilePictureTypes) {
  return (
    <S.ProfileWrapper size={size} data-testid="profile-wrapper">
      {picture ? (
        <S.Avatar src={picture} alt={`${name} Profile Picture`} />
      ) : (
        <S.AvatarPlaceholder size={size} data-testid="placeholder">
          {name.charAt(0)}
        </S.AvatarPlaceholder>
      )}
    </S.ProfileWrapper>
  )
}
