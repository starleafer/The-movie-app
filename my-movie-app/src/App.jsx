import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MovieAPI from './components/MovieAPI'
import Footer from './components/Footer'

function App() {



  return (
    <div className="App">
      <Header />
      <MovieAPI />
      <Footer />
     
    </div>
  )
}

export default App
