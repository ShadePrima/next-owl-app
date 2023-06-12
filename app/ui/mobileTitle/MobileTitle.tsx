import React from 'react'
import Image from 'next/image'

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '700', subsets: ['latin'] })

import mobileBg from '../../assets/image/mobile-title.png'

import styles from './MobileTitle.module.scss'

type Props = {
  title: string
  lineHeight?: string
}

/**
 *
 * @param lineHeight require a value in this '50'px format
 * @returns mobile title (425px max width screen)
 */

const MobileTitle = ({ title, lineHeight = '50px' }: Props) => {
  return (
    <div className={styles.mobileTitle}>
      <h1 className={roboto.className} style={{ lineHeight: lineHeight }}>
        {title}
      </h1>
      <Image src={mobileBg} alt='mobile-bg' />
    </div>
  )
}

export default MobileTitle
