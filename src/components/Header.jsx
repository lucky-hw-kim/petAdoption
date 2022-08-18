import React from 'react'
import css from '../styles/Header.module.css'

const Header = () => {
  return (
    <nav className={css.navBar}>
      <div className={css.logo}>
        <a href="/">
        PET LOGO
        </a>
      </div>
      <div className={css.menu}>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  )
}

export default Header