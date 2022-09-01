import { useState, useEffect } from 'react'

import Layout from 'components/Layout'
import SearchInput from 'components/SearchInput'
import PeoplesList from 'components/PeoplesList'

import { getAllPersons } from 'services/personServices'

export default function App() {
  const [persons, setPersons] = useState<any[]>([])

  useEffect(() => {
    const callPersonsService = async () => {
      const response = await getAllPersons()

      setPersons(response.data)
    }

    callPersonsService()
  }, [])

  return (
    <Layout>
      <SearchInput />
      <PeoplesList persons={persons} />
    </Layout>
  )
}
