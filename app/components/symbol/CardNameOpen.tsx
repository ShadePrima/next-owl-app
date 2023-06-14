import React from 'react'
import Image from 'next/image'

import minusButton from '../../assets/icons/minus.svg'

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

import styles from './Symbol.module.scss'
import Link from 'next/link'
import routes from '@/routes'

const CardNameOpen = () => {
  return (
    <div id='card-name-open' className={styles.card}>
      <div className={styles.textLogo}>
        <h2>Ґерць</h2>
        <h3>-</h3>
        <h4>танок зі смертю</h4>
      </div>

      <div className={styles.text}>
        <h2 className={styles.title}>НАЗВА</h2>
        <p className={`${styles.text1} ${roboto.className}`}>
          <span>Чому Герць?</span> <br />В українській мові є таке слово -
          «герць». Ні російською, ні якоюсь іншою мовою це слово в принципі не
          перекладається. Іменник з таким значенням є тільки у нас. Це абсолютно
          унікальний термін.
        </p>
        <p className={`${styles.text2} ${roboto.className}`}>
          Герць - це щось подібне до коктейлю з розвідки боєм і танцю зі смертю.
          Герць придумали запорізькі козаки, і вони були єдиними, хто його
          використовував у війні. Щось подібне існувало і у воїнів інших
          народів, але козаки були найнахабнішими...
        </p>
        <p className={`${styles.text2} ${roboto.className}`}>
          Тут може бути якийсь додатковий текст ! У відкритій карточці
        </p>
        <p className={`${styles.text2} ${roboto.className}`}>
          Тут може бути якийсь додатковий текст ! У відкритій карточці
        </p>{' '}
        <p className={`${styles.text2} ${roboto.className}`}>
          Тут може бути якийсь додатковий текст ! У відкритій карточці
        </p>{' '}
        <p className={`${styles.text2} ${roboto.className}`}>
          Тут може бути якийсь додатковий текст ! У відкритій карточці
        </p>{' '}
        <p className={`${styles.text2} ${roboto.className}`}>
          Тут може бути якийсь додатковий текст ! У відкритій карточці
        </p>
      </div>
      <Link href={routes.symbol}>
        <Image className={styles.plusButton} src={minusButton} alt='minus' />
      </Link>
    </div>
  )
}

export default CardNameOpen
