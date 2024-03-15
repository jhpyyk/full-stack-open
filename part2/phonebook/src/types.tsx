export type PersonType = {
    name: string
    number: string
    id: string
}

export type PersonNoId = Omit<PersonType, 'id'>