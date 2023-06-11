import { Roboto } from 'next/font/google'

import styles from './Navigation.module.scss'

import { navigationList } from '../../data/navigationList'

const roboto = Roboto({ weight: '700', subsets: ['latin'] })

const Navigation = () => {
  return (
    <ul className={styles.navRow}>
      {navigationList.map((item) => (
        <li className={roboto.className} key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export default Navigation
