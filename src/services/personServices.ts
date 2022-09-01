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
