import axios from 'axios'
import PersonType from '../types'

const baseUrl = 'http://localhost:3001/persons'

interface ICreatePerson extends Omit<PersonType, 'id'> { }

const getAll = (): Promise<PersonType[]> => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (person: ICreatePerson): Promise<PersonType> => {
    const request = axios.post(baseUrl, person)
    return request.then(response => response.data)
}

const update = (): Promise<PersonType> => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    update,
}