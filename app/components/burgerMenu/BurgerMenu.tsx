'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './BurgerMenu.module.scss'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.burgerMenu}>
      <button
        className={`${styles.burgerIcon} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <span
          className={`${styles.burgerLine} ${isOpen ? styles.open : ''}`}
        ></span>
        <span
          className={`${styles.burgerLine} ${isOpen ? styles.open : ''}`}
        ></span>
        <span
          className={`${styles.burgerLine} ${isOpen ? styles.open : ''}`}
        ></span>
      </button>

      <div className={`${styles.menuContainer} ${isOpen ? styles.open : ''}`}>
        <nav className={`${styles.menuItems}`}>
          <ul>
            <li>
              <button onClick={toggleMenu}>
                <Link href='/'>Home</Link>
              </button>
            </li>
            <li>
              <button onClick={toggleMenu}>
                <Link href='/#about-us'>Про нас</Link>
              </button>
            </li>
            <li>
              <button onClick={toggleMenu}>
                <Link href='/#combat-path'>Бойовий шлях</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default BurgerMenu
