interface StatisticLineProps {
    text: string
    statValue: number
    decimals?: number
    dimension?: string
}

const StatisticLine = ({ text, statValue, decimals = 0, dimension }: StatisticLineProps) => {
    return (
        <>
            <tr>
                <td>{text}</td>
                <td>{statValue.toFixed(decimals)} {dimension}</td>
            </tr>
        </>
    )
}

export default StatisticLine