import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  function increaseByOne() {
    setCounter(counter + 1);
  }

  function decreaseByOne() {
    setCounter(counter - 1);
  }

  function setZero() {
    setCounter(counter = 0);
  }



  return (
    <>

      <h1>Counter App</h1>

      <button className='button' onClick={increaseByOne}>+1</button>

      <button>{counter}</button>

      <button className='button' onClick={decreaseByOne}>-1</button>

      <br />

      <button className='button' onClick={setZero}>Set 0</button>



    </>
  )
}

export default App
