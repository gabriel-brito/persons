import * as S from 'components/Container/styles'
import { ReactElement } from 'react'

type ContainerTypes = {
  children: ReactElement
}

export default function Container({ children }: ContainerTypes) {
  return <S.Container data-testid="container">{children}</S.Container>
}
