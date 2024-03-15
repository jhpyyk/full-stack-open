import React from "react"
import { PersonType } from "../types"

interface PersonProps {
    person: PersonType
    handleDeleteButtonClick: (id: string) => void
}

const Person = (props: PersonProps): React.JSX.Element => {
    return (
        <p>
            {props.person.name} {props.person.number}{' '}
            <button onClick={() => props.handleDeleteButtonClick(props.person.id)}>delete</button>
        </p>
    )
}

export default Person