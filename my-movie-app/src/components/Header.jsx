import React from 'react'
import myStyle from './myStyle.module.css'

const Header = () => {

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <header className={myStyle.headerSection}>
        <a onClick={reloadPage}href="">
          <h1 >Movie Night</h1>
        </a>
        <i>Built with OMDB API</i>
    </header>
  )
}

export default Header