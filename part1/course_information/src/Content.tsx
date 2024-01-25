import Part, { PartInterface } from "./Part"

interface ContentProps {
    parts: PartInterface[]
}

const Content = (props: ContentProps) => {
    return (
        <>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </>
    )
}

export default Content