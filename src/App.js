import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './components/globalStyles'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Hero />
      </BrowserRouter>

    </>
  )
}

export default App