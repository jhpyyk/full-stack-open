import { useState } from 'react'
import FeedbackButton from './components/FeedbackButton/FeedbackButton'
import Statistics from './components/Statistics/Statistics'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give feedback</h1>
            <FeedbackButton text="Bad" handleClick={() => setBad(bad + 1)} />
            <FeedbackButton text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
            <FeedbackButton text="Good" handleClick={() => setGood(good + 1)} />
            <Statistics bad={bad} neutral={neutral} good={good} />
        </div>
    )
}

export default App