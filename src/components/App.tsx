import { useState, useEffect } from 'react'

import Layout from 'components/Layout'
import SearchInput from 'components/SearchInput'
import PeoplesList from 'components/PeoplesList'
import Loader from 'components/Loader'

import { getAllPersons } from 'services/personServices'

export default function App() {
  const [persons, setPersons] = useState<any[]>([])
  const [showLoader, setShowLoader] = useState<boolean>(true)

  const generalRequest = async () => {
    const response = await getAllPersons()

    setPersons(response.data)
    setShowLoader(false)
  }

  useEffect(() => {
    generalRequest()
  }, [])

  return (
    <Layout>
      <SearchInput />
      <PeoplesList persons={persons} generalRequest={generalRequest} />

      <Loader showLoader={showLoader} />
    </Layout>
  )
}
