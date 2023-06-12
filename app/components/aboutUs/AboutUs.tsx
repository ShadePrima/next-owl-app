import React from 'react'

import Image from 'next/image'
import line from '../../assets/icons/line.svg'
import bg from '../../assets/image/bg-title.png'

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '700', subsets: ['latin'] })

import styles from './AboutUs.module.scss'

const AboutUs = () => {
  return (
    <div className={`${styles.root} `}>
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

        <p className={`${styles.text} ${styles.text1}`}>
          Історія нашого підрозділу розпочалась з повномасштабним вторгненням
          російських окупантів 24-го лютого 2022 року. Тоді невеличке коло
          друзів-однодумців, рухомих спільною метою захищати Батьківщину до
          Перемоги, сконтактувались, та прийняли рішення рухатись до цієї мети
          разом. Так розпочала свій шлях наша, на той момент, невелика
          розвідувальна група.
        </p>

        <p className={styles.text}>
          Але насправді наша історія розпочалась значно раніше… Підрозділ
          формується з особистостей, де кожна з них зі своєю історією та
          життєвим шляхом, а отже коли усі ці люди зібрались разом, вони
          закумулювали свій життєвий досвід, навички, знання, аби об‘єднати
          зусилля. Кожен тим, чим може, та в чому сильний. Тому історія
          підрозділу нерозривно пов‘язана з історією кожної особистості, що його
          формує.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
