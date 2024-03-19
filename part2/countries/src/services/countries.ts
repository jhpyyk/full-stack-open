import axios from 'axios'
import { Country } from '../types'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = (): Promise<Country[]> => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

export default { getAll }