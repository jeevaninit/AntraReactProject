import React from 'react'
import './App.css'
import Header from './Header'
import Nav from './Nav'
import Container from './Container'
import Footer from './Footer'


const App = () => {

  const name='jeevan';
  return (
    <div>
      <h1>Welcome to React Test Cases</h1>

  {/*     <Header nm={name} /> */}

      <Nav />
      <Container />
      <Footer />
  
    
    </div>
  )
}

export default App