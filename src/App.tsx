import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import AllRouter from './router/routers';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <AllRouter/>
    </>
  )
}

export default App
