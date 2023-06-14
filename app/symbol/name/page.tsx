import SectionTitle from '@/app/ui/sectionTitle/SectionTitle'
import MobileTitle from '@/app/ui/mobileTitle/MobileTitle'
import CardLogo from '@/app/components/symbol/CardLogo'
import CardNameOpen from '@/app/components/symbol/CardNameOpen'

import styles from './page.module.scss'
import routes from '@/routes'
import Link from 'next/link'
import ShoutingOut from '@/app/components/shoutingOut/ShoutingOut'

export default function Logo() {
  return (
    <div className={styles.root}>
      <div className='container'>
        <MobileTitle idValue='symbol' title='Символіка' />
        <Link href={routes.symbol}>
          <SectionTitle textTop='Символіка' />
        </Link>
        <div className={styles.contentRow}>
          <CardLogo />
          <CardNameOpen />
        </div>
        <ShoutingOut />
      </div>
    </div>
  )
}
