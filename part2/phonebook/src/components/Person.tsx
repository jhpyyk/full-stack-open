import React from "react"

interface PersonProps {
    name: string
}

const Person = (props: PersonProps): React.JSX.Element => {
    return (
        <>
            <p>{props.name}</p>
        </>
    )
}

export default Person