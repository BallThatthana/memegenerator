import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
function App() {

  return (
    <div className='main'>
    <Header />
    <Form />
    </div>
  )
}

export default App
