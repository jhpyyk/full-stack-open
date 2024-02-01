import { PartInterface } from "./Part"
import "./TotalStyles.css"


interface TotalProps {
    parts: PartInterface[]
}

const Total = ({ parts }: TotalProps) => {
    return (
        <>
            <p className="total">Number of exercises {calculateSum(parts)}</p>
        </>
    )
}

const calculateSum = (numbers: PartInterface[]): number => {
    return numbers.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)
}

export default Total