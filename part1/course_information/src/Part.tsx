export interface PartInterface {
    name: string
    exercises: number
}

export interface PartProps {
    part: PartInterface
}

const Part = (props: PartProps) => {
    return (
        <>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </>
    )
}

export default Part