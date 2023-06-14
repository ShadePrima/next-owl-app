import React from 'react'
import Image from 'next/image'

import { Russo_One } from 'next/font/google'
const russo = Russo_One({ weight: '400', subsets: ['latin'] })

import bg from '../../assets/background/quote-bg.png'

import styles from './Quote.module.scss'

const Quote = () => {
  return (
    <div className={styles.root}>
      <div className={`${'container'} ${styles.textContainer}`}>
        <h1 className={russo.className}>
          Коли сильні особистості з твердою метою об‘єднуються <br /> — вони
          породжують ще більш сильний організм,
          <br /> що невідворотно починає розвиватись
        </h1>

        <Image className={styles.bg} src={bg} alt='background' />
      </div>
    </div>
  )
}

export default Quote
