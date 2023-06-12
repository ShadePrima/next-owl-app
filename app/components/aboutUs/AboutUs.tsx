import React from 'react'
import styles from './AboutUs.module.scss'
import Image from 'next/image'
import line from '../../assets/icons/line.svg'
import bg from '../../assets/image/bg-title.png'

const AboutUs = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.logo}>
          <Image src={bg} alt='bg' />
          <Image src={line} alt='line' />
          <h1>Про нас</h1>
          <h3>Полк Спеціального Призначення “Герць”</h3>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
