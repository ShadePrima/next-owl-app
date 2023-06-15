import SectionTitle from '@/app/ui/sectionTitle/SectionTitle'

import conceptImg from '../../assets/image/concept-img.png'

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

import Image from 'next/image'
import target from '../../assets/icons/target.svg'

import { conceptList } from '@/app/data/conceptList'

import styles from './Concept.module.scss'
import MobileTitle from '@/app/ui/mobileTitle/MobileTitle'
import ConceptMobileCard from '../conceptMobileCard/ConceptMobileCard'

const Concept = () => {
  return (
    <div className={styles.root}>
      <div className={`${'container'} ${styles.flexContainer}`}>
        <MobileTitle
          title='Концепція підрозділу'
          lineHeight='50px'
          idValue='concept'
        />
        <ConceptMobileCard />
        <div className={styles.leftColumn}>
          <SectionTitle textTop='Концепція' textBottom='підрозділу' />
          <div className={styles.content}>
            {conceptList.map((item) => (
              <div key={item.id} className={styles.contentItem}>
                <Image src={target} alt='target' />
                <p className={`${styles.text} ${roboto.className}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightColumn}>
          <Image src={conceptImg} alt='img' />
        </div>
      </div>
    </div>
  )
}

export default Concept
