import { useState } from 'react'
import './App.css'
import HostAppComponents from './components/hostAppComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Host app</h1>
      <HostAppComponents />
    </>
  )
}

export default App
