interface TotalProps {
    exercises: number[]
}

const Total = (props: TotalProps) => {
    return (
        <>
            <p> Number of exercises {calculateSum(props.exercises)}
            </p>
        </>
    )
}

const calculateSum = (numbers: number[]): number => {
    return numbers.reduce((sum, num) => {
        return sum + num
    }, 0)
}

export default Total