import React from 'react'

import Navigation from '../navigation/Navigation'
import HelpButton from '@/app/ui/helpButton/HelpButton'
import JoinButton from '@/app/ui/joinButton/JoinButton'
import VideoPlayer from '@/app/ui/videoPlayer/VideoPlayer'

import styles from './Header.module.scss'
import Image from 'next/image'
import logo from '../../assets/image/logo.svg'
import BurgerMenu from '@/app/components/burgerMenu/BurgerMenu'

const Header = () => {
  return (
    <section className={styles.root}>
      <div className={styles.backgraundNav}></div>

      <div className='container'>
        <div className={styles.logoRow}>
          <Image src={logo} alt='logo' />
          <Navigation />
          <BurgerMenu />
        </div>

        <div className={styles.contentBlock}>
          <h1 className={styles.title}>Доля допомагає хоробрим</h1>
          <div className={styles.buttonRow}>
            <HelpButton />
            <JoinButton />
          </div>

          <VideoPlayer />
        </div>
      </div>
    </section>
  )
}

export default Header
