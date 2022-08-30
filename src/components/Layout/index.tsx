import { ReactElement } from 'react'

import Header from 'components/Header'
import Container from 'components/Container'
import Footer from 'components/Footer'

type LayoutTypes = {
  children: ReactElement
}

export default function Layout({ children }: LayoutTypes) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
