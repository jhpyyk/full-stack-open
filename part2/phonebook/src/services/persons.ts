import axios from 'axios'
import { PersonNoId, PersonType } from '../types'

const baseUrl = 'http://localhost:3001/persons'

const getAll = (): Promise<PersonType[]> => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (person: PersonNoId): Promise<PersonType> => {
    const request = axios.post(baseUrl, person)
    return request.then(response => response.data)
}

const remove = (id: string): Promise<PersonType> => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (newPerson: PersonType): Promise<PersonType> => {
    const request = axios.put(`${baseUrl}/${newPerson.id}`, newPerson)
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    remove,
    update,
}