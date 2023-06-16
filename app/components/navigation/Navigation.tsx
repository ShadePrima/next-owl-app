import { Roboto } from 'next/font/google'

import { navigationList } from '../../data/navigationList'
import Link from 'next/link'

const roboto = Roboto({ weight: '700', subsets: ['latin'] })

import styles from './Navigation.module.scss'

type Props = {
  open?: boolean
  display?: string
}

const Navigation = ({ open, display }: Props) => {
  return (
    <ul className={styles.navRow} style={{ display: display }}>
      {navigationList.map((item) => (
        <li className={roboto.className} key={item.id}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
