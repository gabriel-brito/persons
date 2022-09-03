import { useState, useEffect, ChangeEvent } from 'react'
import Debounce from 'lodash.debounce'

import Layout from 'components/Layout'
import SearchInput from 'components/SearchInput'
import PeoplesList from 'components/PeoplesList'
import Loader from 'components/Loader'

import { getAllPersons, searchForPersons } from 'services/personServices'
import { transformToListItem } from 'utils/persons'

export default function App() {
  const [persons, setPersons] = useState([])
  const [showLoader, setShowLoader] = useState(false)
  const [isFromFilter, SetIsFromFilter] = useState(false)

  const generalRequest = async () => {
    setShowLoader(true)
    SetIsFromFilter(false)
    const response = await getAllPersons()

    setPersons(response.data)
    setShowLoader(false)
  }

  const filterByTyping = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim()

    if (!value) {
      generalRequest()

      return
    }

    if (value.length < 2) {
      generalRequest()

      return
    }

    SetIsFromFilter(true)
    setShowLoader(true)

    const response = await searchForPersons(value)

    setPersons(transformToListItem(response.data.items))
    setShowLoader(false)
  }

  const handleFilter = Debounce(filterByTyping, 500)

  useEffect(() => {
    generalRequest()
  }, [])

  return (
    <Layout>
      <SearchInput handleFilter={handleFilter} />
      <PeoplesList
        generalRequest={generalRequest}
        persons={persons}
        isFromFilter={isFromFilter}
      />

      <Loader showLoader={showLoader} />
    </Layout>
  )
}
