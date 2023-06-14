import React from 'react'
import Image from 'next/image'

import plusButton from '../../assets/icons/plus.svg'
import logo from '../../assets/image/logo.svg'

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

import styles from './Symbol.module.scss'
import Link from 'next/link'
import routes from '@/routes'

const CardLogo = () => {
  return (
    <div className={styles.card} style={{ height: '920px' }}>
      <Image className={styles.logo} src={logo} alt='logo' />

      <div className={styles.text}>
        <h2 className={styles.title}>Лого</h2>
        <p className={`${styles.text1} ${roboto.className}`}>
          На нашій символіці зображено скелет сови, що тримає спис у вигляді
          тризуба.
        </p>
        <p className={`${styles.text2} ${roboto.className}`}>
          Сова є символом мудрості. Весь свій шлях ми навчались. Вчились на
          своїх помилках та чужих, завзято поглинаючи усе, що може нам допомогти
          на шляху до Перемоги. І ми хочемо, аби ворог пам‘ятав, що навчання і
          мудрість завжди перемагають пихатість, і як наслідок невігластво,
          притаманні імперіалізму. До того ж, сова є символом розвідки. А
          оскільки історія підрозділу розпочалась саме з невеликої...
        </p>
      </div>
      <Link href={routes.logo}>
        <Image className={styles.plusButton} src={plusButton} alt='plus' />
      </Link>
    </div>
  )
}

export default CardLogo
