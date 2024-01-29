import { useEffect, useState } from "react"
import StatisticLine from "../StatisticLine/StatisticLine"

interface StatisticsProps {
    bad: number
    neutral: number
    good: number
}

const Statistics = ({ bad, neutral, good }: StatisticsProps) => {

    const [total, setTotal] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    useEffect(() => {
        setTotal(bad + neutral + good)
    }, [bad, neutral, good])

    useEffect(() => {
        if (total == 0) {
            setAverage(0)
        } else {
            setAverage((good - bad) / total)
        }
    }, [bad, good, total])

    useEffect(() => {
        if (total == 0) {
            setPositive(0)
        } else {
            setPositive(100 * good / total)
        }
    }, [bad, good, positive, total])

    return (
        <>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text={"Bad: "} statValue={bad} />
                    <StatisticLine text={"Neutral: "} statValue={neutral} />
                    <StatisticLine text={"Good: "} statValue={good} />
                    <StatisticLine text={"Total: "} statValue={total} />
                    <StatisticLine text={"Average: "} statValue={average} decimals={1} />
                    <StatisticLine text={"Positive: "} statValue={positive} decimals={1} dimension='%' />
                </tbody>
            </table>
        </>
    )
}

export default Statistics