import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Training from './components/Training/Training'

function App() {

  return (
    <>
      <h1>DuoTraining</h1>
      <div className="line"></div>
      <Training />
    </>
  )
}

export default App
