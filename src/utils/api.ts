import axios from 'axios'
import { baseURL } from 'utils/constants'

export const axiosConfig = axios.create({
  baseURL
})
