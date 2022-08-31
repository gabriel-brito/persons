import * as S from 'components/Container/styles'
import { ReactNode } from 'react'

type ContainerTypes = {
  children: ReactNode
}

export default function Container({ children }: ContainerTypes) {
  return <S.Container data-testid="container">{children}</S.Container>
}
