import { PersonType } from "../types"
import Person from "./Person"

interface PersonListProps {
    persons: PersonType[]
    handleDeleteButtonClick: (id: string) => void
}

const PersonList = (props: PersonListProps): React.JSX.Element => {
    return (
        <>
            {props.persons.map(person =>
                <Person
                    key={person.id}
                    person={{ id: person.id, name: person.name, number: person.number }}
                    handleDeleteButtonClick={props.handleDeleteButtonClick}
                />
            )}
        </>
    )
}
export default PersonList