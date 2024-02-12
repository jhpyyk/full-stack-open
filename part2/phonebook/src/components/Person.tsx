import React from "react"
import PersonType from "../types"

const Person = (props: PersonType): React.JSX.Element => {
    return (
        <>
            <p>{props.name} {props.number}</p>
        </>
    )
}

export default Person