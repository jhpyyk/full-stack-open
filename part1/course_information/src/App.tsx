import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course: string = 'Half Stack application development'
  const part1: string = 'Fundamentals of React'
  const exercises1: number = 10
  const part2: string = 'Using props to pass data'
  const exercises2: number = 7
  const part3: string = 'State of a component'
  const exercises3: number = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App
