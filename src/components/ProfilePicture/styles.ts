import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  border-radius: 50%;
  height: ${(props: { size: number }) => `${props.size}px`};
  overflow: hidden;
  width: ${(props: { size: number }) => `${props.size}px`};
`

export const Avatar = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`

export const AvatarPlaceholder = styled.span`
  align-items: center;
  background-color: var(--darkenAliceBlue);
  color: blue;
  display: flex;
  font-size: 1.3rem;
  height: ${(props: { size: number }) => `${props.size}px`};
  justify-content: center;
  width: ${(props: { size: number }) => `${props.size}px`};
`
