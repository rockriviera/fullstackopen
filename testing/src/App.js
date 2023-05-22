import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

const Display = ({counter}) => <div>{counter}</div>
const Button = ({handleClick, text}) => <button onClick ={handleClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left+1)
}

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right+1)
}

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App;