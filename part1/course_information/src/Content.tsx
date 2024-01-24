interface ContentProps {
    part: string
    exercises: number
}

const Content = (props: ContentProps) => {
    return (
        <>
            <p>
                {props.part} {props.exercises}
            </p>
        </>
    )
}

export default Content