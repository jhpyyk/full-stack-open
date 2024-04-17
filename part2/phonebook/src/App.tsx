import React, { useEffect, useState } from 'react'
import { PersonType, PersonNoId } from './types'
import ControlledInputField from './components/ControlledInputField'
import AddNewPersonForm from './components/AddNewPersonForm'
import PersonList from './components/PersonList'
import personService from './services/persons'
import NotificationText from './components/Notification/NotificationText'

const App = (): React.JSX.Element => {
    const [persons, setPersons] = useState<PersonType[]>([])
    const [personsFiltered, setPersonsFiltered] = useState<PersonType[]>(persons)
    const [nameField, setNameField] = useState('')
    const [numberField, setNumberField] = useState('')
    const [searchField, setSearchField] = useState('')
    const [notificationText, setNotificationText] = useState('')
    const [notificationColor, setNotificationColor] = useState('white')
    const [notificationTimerID, setNotificationTimerID] = useState(0)

    const handleNameFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNameField(event.target.value)
    }

    const handleNumberFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNumberField(event.target.value)
    }

    const handleSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchField(event.target.value)
    }

    const handleSubmitButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()
        const personIfExists: PersonType | undefined = persons.find(person => person.name === nameField)
        if (personIfExists === undefined) {
            console.log('adding person')
            const newPerson: PersonNoId = { name: nameField, number: numberField }
            personService.create(newPerson)
                .then(createdPerson => {
                    setPersons(persons.concat(createdPerson))
                    notify('Person added', true)
                })
                .catch(error => notify(error.response.data.error, false))
        } else if (window.confirm(`The phonebook already has a person named ${nameField}. Replace the number?`)) {
            console.log('replacing person')
            const updatedPerson: PersonType = { ...personIfExists, number: numberField }
            personService.update(updatedPerson)
                .then(response => {
                    setPersons(replacePerson(persons, response, updatedPerson))
                    notify('Number changed', true)
                })
                .catch(() => {
                    notify(`The person '${personIfExists.name}' has already been deleted from the server`, false)
                })
        }
    }

    const deletePerson = (id: string) => {
        console.log('deleting person')
        const personToDelete = persons.find(person => person.id === id)
        if (personToDelete === undefined) {
            window.alert(`Person id ${id} not found.`)
            return
        }
        if (!window.confirm(`Delete ${personToDelete.name}?`)) {
            return
        }
        personService.remove(id).then(response => {
            setPersons(persons.filter(person =>
                person.id !== response.id)
            )
            notify('Person deleted', true)
        }
        ).catch(() => {
            notify(`The person '${personToDelete.name}' has already been deleted from the server`, false)
        })
    }

    const notify = (text: string, positive: boolean) => {
        setNotificationText(text)
        if (positive) {
            setNotificationColor('lightgreen')
        } else {
            setNotificationColor('red')
        }
        clearTimeout(notificationTimerID)
        setNotificationTimerID(setTimeout(() => {
            setNotificationText('')
            setNotificationColor('white')
        }, 5000))
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
            <AddNewPersonForm handleNameFieldChange={handleNameFieldChange} handleNumberFieldChange={handleNumberFieldChange} handleSubmitButtonClick={handleSubmitButtonClick} />
            <NotificationText text={notificationText} color={notificationColor} />
            <h2>Numbers</h2>
            <PersonList persons={personsFiltered} handleDeleteButtonClick={deletePerson} />
        </div>
    )
}

const replacePerson = (persons: PersonType[], personToReplace: PersonType, updatedPerson: PersonType): PersonType[] => {
    return persons.map(person => {
        if (person.id === personToReplace.id) {
            return updatedPerson
        } else {
            return person
        }
    })
}

export default App
