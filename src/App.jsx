import { useState } from 'react'
import React from 'react'
import Navbar from './NavbarComponents/Navbar'
import Home from './RootPageComponents/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
