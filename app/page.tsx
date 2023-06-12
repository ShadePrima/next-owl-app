import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/app/components/header/Header'
import AboutUs from './components/aboutUs/AboutUs'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <AboutUs />
    </main>
  )
}
