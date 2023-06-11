import { Roboto } from 'next/font/google'

import styles from './Navigation.module.scss'

import { navigationList } from '../../data/navigationList'

const roboto = Roboto({ weight: '700', subsets: ['latin'] })

type Props = {
  open?: boolean
  display?: string
}

const Navigation = ({ open, display }: Props) => {
  return (
    <ul
      className={open ? styles.navRow : styles.navBurger}
      style={{ display: display }}
    >
      {navigationList.map((item) => (
        <li className={roboto.className} key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export default Navigation
