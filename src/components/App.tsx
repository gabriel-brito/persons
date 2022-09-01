import { useState, useEffect } from 'react'

import Layout from 'components/Layout'
import SearchInput from 'components/SearchInput'
import PeoplesList from 'components/PeoplesList'
import Loader from 'components/Loader'

import { getAllPersons } from 'services/personServices'

export default function App() {
  const [persons, setPersons] = useState<any[]>([])
  const [showLoader, setShowLoader] = useState<boolean>(true)

  useEffect(() => {
    const initialRequest = async () => {
      const response = await getAllPersons()

      setPersons(response.data)
      setShowLoader(false)
    }

    initialRequest()
  }, [])

  return (
    <Layout>
      <SearchInput />
      <PeoplesList persons={persons} />

      <Loader showLoader={showLoader} />
    </Layout>
  )
}
