import Image from 'next/image'

import triangle from '../../assets/icons/triangle-white.svg'
import bg from '../../assets/background/help-bg.png'

import { Russo_One } from 'next/font/google'
const russo = Russo_One({ weight: '400', subsets: ['latin'] })

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '700', subsets: ['latin'] })

import hands from '../../assets/icons/hands.svg'
import soldier from '../../assets/image/soldier.png'
import arrowBottom from '../../assets/icons/arrow-bottom .svg'

import SectionTitle from '@/app/ui/sectionTitle/SectionTitle'
import HelpButton from '@/app/ui/helpButton/HelpButton'
import JoinButton from '@/app/ui/joinButton/JoinButton'
import MobileTitle from '@/app/ui/mobileTitle/MobileTitle'

import styles from './Help.module.scss'

const Help = () => {
  return (
    <section className={styles.root}>
      <div className={styles.bgTest}>
        <div className={`${'container'} ${styles.bg}`}>
          <div className={styles.text}>
            <h1 className={russo.className}>
              Твоя допомога важлива <br />
              для спільної перемоги
            </h1>
            <Image className={styles.triangle1} src={triangle} alt='triange' />
            <Image className={styles.triangle2} src={triangle} alt='triange' />
            <Image className={styles.triangle3} src={triangle} alt='triange' />
            <Image className={styles.triangle4} src={triangle} alt='triange' />
          </div>
          {/* <Image className={styles.bgImage} src={bg} alt='bg' /> */}
        </div>
      </div>

      <div className={`${'container'} ${styles.title}`}>
        <SectionTitle textTop='Допомогти' textBottom='підрозділу' />
      </div>

      <div className='container'>
        <MobileTitle
          title='Допомогти підрозділу'
          lineHeight='50px'
          idValue='help'
        />
      </div>

      <div className={`${styles.contentRow} ${'container'}`}>
        <div className={styles.fond}>
          <Image className={styles.fondIcone} src={hands} alt='hands' />
          <h2 className={`${styles.fondTitle} ${roboto.className}`}>
            «Благодійний фонд спецпідрозділу Ґерць»
          </h2>
          <HelpButton />
        </div>

        <div className={styles.join}>
          <div className={styles.joinImageContainer}>
            <Image src={soldier} alt='soldier' className={styles.joinImage} />
          </div>
          <div className={styles.joinWrapper}>
            <h2 className={`${styles.joinTitle} ${roboto.className}`}>
              Долучайтесь до нас
            </h2>
            <Image
              src={arrowBottom}
              alt='Arrow'
              className={styles.joinArrowbottom}
            />
            <JoinButton />
            <p className={`${styles.joinText} ${roboto.className}`}>
              Заповнюй анкету
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Help
