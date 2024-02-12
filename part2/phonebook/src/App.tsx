import React, { useEffect, useState } from 'react'
import PersonType from './types'
import ControlledInputField from './components/ControlledInputField'
import AddNewPersonForm from './components/AddNewPersonForm'
import PersonList from './components/PersonList'

const App = (): React.JSX.Element => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
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
            setPersons(persons.concat({ name: nameField, number: numberField }))
        } else {
            alert(`The phonebook already has a person named ${nameField}.`)
        }
    }

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
