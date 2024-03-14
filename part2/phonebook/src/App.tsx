import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PersonType from './types'
import ControlledInputField from './components/ControlledInputField'
import AddNewPersonForm from './components/AddNewPersonForm'
import PersonList from './components/PersonList'
import personService from './services/persons'

const App = (): React.JSX.Element => {
    const [persons, setPersons] = useState<PersonType[]>([])
    const [personsFiltered, setPersonsFiltered] = useState<PersonType[]>(persons)
    const [nameField, setNameField] = useState('')
    const [numberField, setNumberField] = useState('')
    const [searchField, setSearchField] = useState('')

    const handleNameFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameField(event.target.value)
    }

    const handleNumberFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberField(event.target.value)
    }

    const handleSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(event.target.value)
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (!persons.some(person => person.name === nameField)) {
            console.log('adding person')
            personService.create({ name: nameField, number: numberField })
                .then(createdPerson =>
                    setPersons(persons.concat(createdPerson))
                )
        } else {
            alert(`The phonebook already has a person named ${nameField}.`)
        }
    }

    useEffect(() => {
        console.log("fetching persons")
        personService.getAll()
            .then(response => {
                setPersons(response)
            })
    }, [])

    useEffect(() => {
        setPersonsFiltered(persons.filter(person =>
            person.name.toLowerCase().includes(searchField.toLowerCase()))
        )
    }, [persons, searchField])

    return (
        <div>
            <h2>Phonebook</h2>
            <ControlledInputField fieldName='search' fieldOnChange={handleSearchFieldChange} />
            <h2>add a new</h2>
            <AddNewPersonForm handleNameFieldChange={handleNameFieldChange} handleNumberFieldChange={handleNumberFieldChange} handleSubmitButtonClick={handleClick} />
            <h2>Numbers</h2>
            <PersonList persons={personsFiltered} />
        </div>
    )
}

export default App
