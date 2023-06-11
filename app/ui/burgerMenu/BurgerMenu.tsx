'use client'

import React from 'react'

import burger from '../../assets/icons/burger.svg'
import close from '../../assets/icons/nav-close.svg'

import Image from 'next/image'
import Navigation from '@/app/components/navigation/Navigation'

import styles from './BurgerMenu.module.scss'

const BurgerMenu = () => {
  const [open, setOpen] = React.useState(true)
  const [imageKey, setImageKey] = React.useState(0)

  console.log(open, 'open')

  const openMenu = () => {
    setOpen(!open)
    setImageKey((prevKey) => prevKey + 1)
  }

  return (
    <>
      <div className={styles.flexContainer}>
        {open && <Navigation display='flex' />}

        <button onClick={openMenu} className={styles.root}>
          {open ? (
            <Image
              className={styles.close}
              key={imageKey}
              width='30'
              height='30'
              src={close}
              alt='close'
              priority
            />
          ) : (
            <Image key={imageKey} src={burger} alt='burger' priority />
          )}
        </button>
      </div>

      {open && <div className={styles.overlay}></div>}
    </>
  )
}

export default BurgerMenu
