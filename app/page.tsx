import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/app/components/header/Header'
import AboutUs from './components/aboutUs/AboutUs'
import CombatPath from './components/combatPath/CombatPath'
import Quote from './components/quote/Quote'
import Symbol from './components/symbol/Symbol'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <AboutUs />
      <CombatPath />
      <Quote />
      <Symbol />
    </main>
  )
}
