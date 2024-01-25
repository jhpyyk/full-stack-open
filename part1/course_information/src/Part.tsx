interface PartProps {
    part: string
    exercises: number
}

const Part = (props: PartProps) => {
    return (
        <>
            <p>
                {props.part} {props.exercises}
            </p>
        </>
    )
}

export default Part