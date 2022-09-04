import { axiosConfig } from 'utils/api'
import { API_KEY } from 'utils/constants'

export const getAllPersons = async () => {
  try {
    const response: any = await axiosConfig.get('persons', {
      params: {
        api_token: API_KEY,
        limit: 10
      }
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const searchForPersons = async (term: string) => {
  try {
    const response: any = await axiosConfig.get('persons/search', {
      params: {
        api_token: API_KEY,
        limit: 10,
        include_fields: 'person.picture',
        term
      }
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const AddPerson = async (body: any) => {
  try {
    const response: any = await axiosConfig.post(
      'persons',
      {
        ...body
      },
      {
        params: {
          api_token: API_KEY
        }
      }
    )

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deletePerson = async (id: number) => {
  try {
    const response: any = await axiosConfig.delete(`persons/${id}`, {
      params: {
        api_token: API_KEY
      }
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
