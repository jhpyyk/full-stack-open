import PersonType from "../types"
import Person from "./Person"

interface PersonListProps {
    persons: PersonType[]
}

const PersonList = ({ persons }: PersonListProps): React.JSX.Element => {
    return (
        <div>
            {persons.map(person => <Person key={person.name} name={person.name} number={person.number} />)}
        </div>
    )
}
export default PersonList