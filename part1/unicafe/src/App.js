import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Statistics = ({stats}) => {
    const [good,neutral,bad]=stats
    console.log({good},{bad},{neutral})
    const all=good+neutral+bad
    const average=(good-bad)/(good+neutral+bad)
    const positive=(good/(good+neutral+bad))
    if (all === 0) {
      return (
        <div>
          <p></p>
          No feedback given
        </div>
      )
    }
    return(
    <>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive" value ={positive} />
    </>
    )
  }

  const StatisticLine=({text,value}) =>{
    return <p>{text} {value}</p>
  }

  const increaseGood = () => {
    setGood(good+1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral+1)
  }
  const increaseBad = () => {
    setBad(bad+1)
  }

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text="good"/>
      <Button handleClick={increaseNeutral} text="neutral"/>
      <Button handleClick={increaseBad} text="bad"/>
      <Statistics stats={[good,neutral,bad]}/>
      
    </div>
  )
}

export default App