import * as S from 'components/Backdrop/styles'
import { ReactNode } from 'react'

type BackdropTypes = {
  children: ReactNode
}

export default function Backdrop({ children }: BackdropTypes) {
  return <S.Backdrop>{children}</S.Backdrop>
}
