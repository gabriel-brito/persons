import Layout from 'components/Layout'
import SearchInput from 'components/SearchInput'
import PeoplesList from 'components/PeoplesList'

export default function App() {
  return (
    <Layout>
      <SearchInput />
      <PeoplesList />
    </Layout>
  )
}
