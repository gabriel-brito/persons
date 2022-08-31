import { ReactNode } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

type LayoutTypes = {
  children: ReactNode
}

export default function Layout({ children }: LayoutTypes) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
