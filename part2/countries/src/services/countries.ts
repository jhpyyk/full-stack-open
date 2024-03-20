import axios from 'axios'
import { RawCountryData } from '../types'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = (): Promise<RawCountryData[]> => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

export default { getAll }