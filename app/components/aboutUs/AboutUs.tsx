import React from 'react'

import Image from 'next/image'
import line from '../../assets/icons/line.svg'
import bg from '../../assets/image/bg-title-1.png'

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '700', subsets: ['latin'] })

import MobileTitle from '@/app/ui/mobileTitle/MobileTitle'
import SwiperGallery from '../swiperGallery/SwiperGallery'

import { aboutUsList } from '@/app/data/aboutUsList'

import styles from './AboutUs.module.scss'

const AboutUs = () => {
  return (
    <div className={`${styles.root} `}>
      <div className='container'>
        <div></div>
        <MobileTitle idValue='about-us' title='Про нас' lineHeight='50px' />
      </div>
      <div className={`${'container'} ${styles.content}`}>
        <div className={styles.logo}>
          <Image className={styles.logoBg} src={bg} alt='bg' />
          <div className={styles.logoText}>
            <div className={styles.firstLine}>
              <Image src={line} alt='line' />
              <h1 className={roboto.className}>Про нас</h1>
            </div>
            <h3>
              Полк Спеціального Призначення <span>“Герць”</span>{' '}
            </h3>
          </div>
        </div>

        <p className={`${styles.text} ${styles.text1}`}>{aboutUsList.text1}</p>
        <p className={styles.text}>{aboutUsList.text2}</p>
      </div>

      <SwiperGallery />
    </div>
  )
}

export default AboutUs
