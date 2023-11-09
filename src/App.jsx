import { useState } from 'react'
import './App.css'
import CardComponent from './components/CardComp/CardComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardComponent></CardComponent>
    </>
  )
}

export default App
