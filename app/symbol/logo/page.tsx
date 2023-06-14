import SectionTitle from '@/app/ui/sectionTitle/SectionTitle'

import styles from './page.module.scss'
import MobileTitle from '@/app/ui/mobileTitle/MobileTitle'
import CardLogoOpen from '@/app/components/symbol/CardLogoOpen'
import CardName from '@/app/components/symbol/CardName'
import Link from 'next/link'
import routes from '@/routes'
import ShoutingOut from '@/app/components/shoutingOut/ShoutingOut'

export default function Logo() {
  return (
    <div className={styles.root}>
      <div className='container'>
        <MobileTitle
          idValue='symbol'
          title='Символіка'
          routes={routes.symbol}
        />
        <Link href={routes.symbol}>
          <SectionTitle textTop='Символіка' />
        </Link>
        <div className={styles.contentRow}>
          <CardLogoOpen />
          <CardName />
        </div>

        <ShoutingOut />
      </div>
    </div>
  )
}
