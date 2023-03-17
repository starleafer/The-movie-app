import React from 'react'
import myStyle from './myStyle.module.css'


const Header = () => {
  return (
    <header className={myStyle.headerSection}>
        <h1>Movie Night</h1>
        <i>Built with OMDB API</i>
    </header>
  )
}

export default Header