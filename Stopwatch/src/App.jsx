import { useState } from 'react'
import Stopwatch from './components/Stopwatch'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Stopwatch/>
    </>
  )
}

export default App
