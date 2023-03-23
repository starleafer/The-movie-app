import React from 'react'
import myStyle from './myStyle.module.css'

const Header = () => {

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <header className={myStyle.headerSection}>
        <a onClick={reloadPage}href="">
          <h1 className={myStyle.neon}>Movie Night</h1>
        </a>
    </header>
  )
}

export default Header