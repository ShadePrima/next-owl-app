import Image from 'next/image'

import fb from '../../assets/icons/fb.svg'
import instagram from '../../assets/icons/instagram.svg'
import tumblr from '../../assets/icons/tumblr.svg'
import twitter from '../../assets/icons/twitter.svg'
import youtube from '../../assets/icons/youtube.svg'

import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className='container'>
        <div className={styles.icons}>
          <Link href='https://www.facebook.com' target='_blank'>
            <Image src={fb} alt='fb' />
          </Link>
          <Link href='https://www.instagram.com' target='_blank'>
            <Image src={instagram} alt='instagram' />
          </Link>
          <Link href='https://www.tumblr.com' target='_blank'>
            <Image src={tumblr} alt='tumblr' />
          </Link>
          <Link href='https://twitter.com' target='_blank'>
            <Image src={twitter} alt='twiter' />
          </Link>
          <Link href='https://www.youtube.com' target='_blank'>
            <Image src={youtube} alt='youtube' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
