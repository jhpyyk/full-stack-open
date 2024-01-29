import { useEffect, useState } from 'react'

const App = () => {
    const anecdotes: string[] = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState<number>(0)
    const [anecdoteVotes, setAnecdoteVotes] = useState<Array<number>>(Array(anecdotes.length).fill(0))
    const [mostVoted, setMostVoted] = useState<number>(0)

    const randomAnecdote = (): void => {
        const anecdoteIndex: number = Math.floor(Math.random() * anecdotes.length)
        console.log(anecdoteIndex)
        setSelected(anecdoteIndex)
    }

    const voteAnecdote = (): void => {
        const votesCopy: number[] = [...anecdoteVotes]
        votesCopy[selected] += 1
        console.log(votesCopy)
        setAnecdoteVotes(votesCopy)
    }

    useEffect(() => {
        setMostVoted(calculateMostVotedIndex(anecdoteVotes, mostVoted))
    }, [anecdoteVotes, mostVoted])

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>This anecdote has {anecdoteVotes[selected]} votes.</p>
            <button onClick={randomAnecdote} >Random anecdote</button>
            <button onClick={voteAnecdote} >Vote for this anecdote</button>
            <h1>Anecdote with the most votes</h1>
            <p>{anecdotes[mostVoted]}</p>
        </div>
    )
}

// Returns a new index only if it is larger than the previous
const calculateMostVotedIndex = (anecdoteVotes: number[], currentMostVoted: number): number => {
    if (Math.max(...anecdoteVotes) === anecdoteVotes[currentMostVoted]) {
        return currentMostVoted
    } else {
        return argMax(anecdoteVotes)
    }
}

// Returns the index of the largest element
// Prioritizes lower index if there are more than one of the largest number
const argMax = (arr: number[]): number => {
    let maxIndex: number = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i
        }
    }
    return maxIndex
}

export default App