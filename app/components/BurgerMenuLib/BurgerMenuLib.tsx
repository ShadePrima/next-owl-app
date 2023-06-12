'use client'

import { slide as Menu } from 'react-burger-menu'

const BurgerMenuLib = () => {
  return (
    <Menu>
      <a className='menu-item' href='/'>
        Home
      </a>
      <a className='menu-item' href='/about'>
        About
      </a>
      <a className='menu-item' href='/services'>
        Services
      </a>
      <a className='menu-item' href='/contact'>
        Contact
      </a>
    </Menu>
  )
}

export default BurgerMenuLib
