import {
  ChangeEvent,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useState
} from 'react'
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
  const [currentPage, setCurrentPage] = useState(1)
  const [start, setStart] = useState(0)
  const [hasNextPage, setHasNextPage] = useState(false)

  const handleNextPage = () => {
    const newStart = start + 10
    setCurrentPage(currentPage + 1)
    setStart(newStart)
    generalRequest(newStart)
  }

  const handlePrevPage = () => {
    const newStart = start - 10
    setCurrentPage(currentPage - 1)
    setStart(newStart)
    generalRequest(newStart)
  }

  const generalRequest = useCallback(async (_start = 0) => {
    setShowLoader(true)
    SetIsFromFilter(false)
    const response = await getAllPersons(_start)

    setPersons(response.data)
    setHasNextPage(
      response['additional_data'].pagination['more_items_in_collection']
    )
    setShowLoader(false)
  }, [])

  const filterByTyping = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim()

    if (!value) {
      generalRequest(start)

      return
    }

    if (value.length < 2) {
      generalRequest(start)

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
  }, [generalRequest])

  return (
    <Layout>
      <Suspense fallback={<Loader showLoader={showLoader} />}>
        <SearchInput handleFilter={handleFilter} />
        <PeoplesList
          generalRequest={generalRequest}
          persons={persons}
          isFromFilter={isFromFilter}
          paginationParams={{
            currentPage,
            handleNextPage,
            handlePrevPage,
            hasNextPage
          }}
        />
      </Suspense>

      <Loader showLoader={showLoader} />
    </Layout>
  )
}
