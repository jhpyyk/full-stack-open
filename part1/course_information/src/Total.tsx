import { PartInterface } from "./Part"

interface TotalProps {
    parts: PartInterface[]
}

const Total = (props: TotalProps) => {
    return (
        <>
            <p> Number of exercises {calculateSum(props.parts)}
            </p>
        </>
    )
}

const calculateSum = (numbers: PartInterface[]): number => {
    return numbers.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)
}

export default Total