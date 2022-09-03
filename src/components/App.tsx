import { useState, useEffect, ChangeEvent } from 'react'
import Debounce from 'lodash.debounce'

import Layout from 'components/Layout'
import SearchInput from 'components/SearchInput'
import PeoplesList from 'components/PeoplesList'
import Loader from 'components/Loader'

import { getAllPersons, searchForPersons } from 'services/personServices'

export default function App() {
  const [persons, setPersons] = useState([])
  const [showLoader, setShowLoader] = useState(true)

  const generalRequest = async () => {
    const response = await getAllPersons()

    setPersons(response.data)
    setShowLoader(false)
  }

  const filterByTyping = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (!value || value.length < 2) return

    const response = await searchForPersons(value)

    setPersons(response.data.items)
  }

  const handleFilter = Debounce(filterByTyping, 500)

  useEffect(() => {
    generalRequest()
  }, [])

  return (
    <Layout>
      <SearchInput handleFilter={handleFilter} />
      <PeoplesList persons={persons} generalRequest={generalRequest} />

      <Loader showLoader={showLoader} />
    </Layout>
  )
}
