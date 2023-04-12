import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Hook from './components/Hook'
import Fetch from './Fetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Hero/> */}
        {/* <Hook/> */}
        <Fetch/>
    </>
  )
}

export default App
