import React from 'react'
import Image from 'next/image'

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '700', subsets: ['latin'] })

import mobileBg from '../../assets/image/mobile-title.png'

import styles from './MobileTitle.module.scss'
import routes from '@/routes'
import Link from 'next/link'

type Props = {
  title: string
  lineHeight?: string
  idValue: string
  routes?: string
}

/**
 *
 * @param lineHeight require a value in this '50'px format
 * @param idValue
 * @returns mobile title (425px max width screen)
 */

const MobileTitle = ({
  title,
  lineHeight = '50px',
  idValue,
  routes = '/',
}: Props) => {
  return (
    <div id={idValue} className={styles.mobileTitle}>
      <Link href={routes}>
        <h1 className={roboto.className} style={{ lineHeight: lineHeight }}>
          {title}
        </h1>
      </Link>
      <Image src={mobileBg} alt='mobile-bg' />
    </div>
  )
}

export default MobileTitle
