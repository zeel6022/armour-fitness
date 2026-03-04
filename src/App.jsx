import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Home from './pages/home'

function App() {
  

  return (
    <>
      <div className='app_container'>
        <Nav/>
        <Home/>
        
      </div>
    
    </>
  )
}

export default App
