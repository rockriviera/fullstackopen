import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
const increaseByOne = () =>setCounter(counter+1)
const setToZero = () => setCounter(0)
const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
  <div>
    <div>{counter}</div>
    <button onClick={increaseByOne}>
      plus
    </button>
    <button onClick={setToZero}> 
      zero
    </button>
  </div>
  )
}

export default App;