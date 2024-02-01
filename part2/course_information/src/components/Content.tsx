import Part, { PartInterface } from "./Part"
import Total from "./Total"

interface ContentProps {
    parts: PartInterface[]
}

const Content = ({ parts }: ContentProps) => {
    return (
        <>
            {parts.map(part => <Part key={part.id} part={part} />)}
            <Total parts={parts} />
        </>
    )
}

export default Content