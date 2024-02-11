import React, { useState } from 'react'
import Person from './components/Person'

const App = (): React.JSX.Element => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value)
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (!persons.some(person => person.name === newName)) {
            setPersons(persons.concat({ name: newName }))
        } else {
            alert(`The phonebook already has a person named ${newName}.`)
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input onChange={handleChange} />
                </div>
                <div>
                    <button type="submit" onClick={handleClick}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person => <Person key={person.name} name={person.name} />)}
            </div>
        </div>
    )

}

export default App
