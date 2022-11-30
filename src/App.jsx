import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RickandMorty from './components/RickandMorty'

function App() {
  

  return (
    <>
        <nav className='nav-rick'></nav>
        <RickandMorty />
        <br />
        <h2 className='footer'>Hecho con ♥ en Academlo</h2>
    </>
    
  )
}

export default App
