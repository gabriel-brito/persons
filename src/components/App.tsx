import { useState, useEffect, ChangeEvent, lazy, Suspense } from 'react'
import Debounce from 'lodash.debounce'

import Layout from 'components/Layout'
import Loader from 'components/Loader'

import { getAllPersons, searchForPersons } from 'services/persons'
import { transformToListItem } from 'utils/persons'

const SearchInput = lazy(() => import('components/SearchInput'))
const PeoplesList = lazy(() => import('components/PeoplesList'))

export default function App() {
  const [persons, setPersons] = useState([])
  const [showLoader, setShowLoader] = useState(true)
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
      <Suspense fallback={<Loader showLoader={showLoader} />}>
        <SearchInput handleFilter={handleFilter} />
        <PeoplesList
          generalRequest={generalRequest}
          persons={persons}
          isFromFilter={isFromFilter}
        />
      </Suspense>

      <Loader showLoader={showLoader} />
    </Layout>
  )
}
