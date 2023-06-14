import SectionTitle from '@/app/ui/sectionTitle/SectionTitle'
import Image from 'next/image'

import logo from '../../assets/image/logo.svg'
import plusButton from '../../assets/icons/plus.svg'

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

import styles from './Symbol.module.scss'
import MobileTitle from '@/app/ui/mobileTitle/MobileTitle'

const Symbol = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <MobileTitle title='Символіка' />
        <SectionTitle textTop='Символіка' />
        <div className={styles.contentRow}>
          <div className={styles.card}>
            <Image className={styles.logo} src={logo} alt='logo' />

            <div className={styles.text}>
              <h2 className={styles.title}>Лого</h2>
              <p className={`${styles.text1} ${roboto.className}`}>
                На нашій символіці зображено скелет сови, що тримає спис у
                вигляді тризуба.
              </p>
              <p className={`${styles.text2} ${roboto.className}`}>
                Сова є символом мудрості. Весь свій шлях ми навчались. Вчились
                на своїх помилках та чужих, завзято поглинаючи усе, що може нам
                допомогти на шляху до Перемоги. І ми хочемо, аби ворог пам‘ятав,
                що навчання і мудрість завжди перемагають пихатість, і як
                наслідок невігластво, притаманні імперіалізму. До того ж, сова є
                символом розвідки. А оскільки історія підрозділу розпочалась
                саме з невеликої...
              </p>
            </div>
            <Image className={styles.plusButton} src={plusButton} alt='plus' />
          </div>

          <div className={styles.card}>
            <div className={styles.textLogo}>
              <h2>Ґерць</h2>
              <h3>-</h3>
              <h4>танок зі смертю</h4>
            </div>

            <div className={styles.text}>
              <h2 className={styles.title}>НАЗВА</h2>
              <p className={`${styles.text1} ${roboto.className}`}>
                <span>Чому Герць?</span> <br />В українській мові є таке слово -
                «герць». Ні російською, ні якоюсь іншою мовою це слово в
                принципі не перекладається. Іменник з таким значенням є тільки у
                нас. Це абсолютно унікальний термін.
              </p>
              <p className={`${styles.text2} ${roboto.className}`}>
                Герць - це щось подібне до коктейлю з розвідки боєм і танцю зі
                смертю. Герць придумали запорізькі козаки, і вони були єдиними,
                хто його використовував у війні. Щось подібне існувало і у
                воїнів інших народів, але козаки були найнахабнішими...
              </p>
            </div>
            <Image className={styles.plusButton} src={plusButton} alt='plus' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Symbol
