import SectionTitle from '@/app/ui/sectionTitle/SectionTitle'
import Image from 'next/image'

import logo from '../../assets/image/logo.svg'
import plusButton from '../../assets/icons/plus.svg'

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

import MobileTitle from '@/app/ui/mobileTitle/MobileTitle'
import CardLogo from './CardLogo'
import CardName from './CardName'

import styles from './Symbol.module.scss'
import Link from 'next/link'
import routes from '@/routes'

const Symbol = () => {
  return (
    <section className={styles.root}>
      <div className='container'>
        <MobileTitle idValue='symbol' title='Символіка' />

        <SectionTitle textTop='Символіка' />

        <div className={styles.contentRow}>
          <CardLogo />
          <CardName />
        </div>
      </div>
    </section>
  )
}

export default Symbol
