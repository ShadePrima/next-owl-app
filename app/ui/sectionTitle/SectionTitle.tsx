import React from 'react'
import Image from 'next/image'

import line from '../../assets/icons/line.svg'
import bg from '../../assets/image/bg-title-1.png'

import { Russo_One } from 'next/font/google'
const russo = Russo_One({ weight: '400', subsets: ['latin'] })

import styles from './SectionTitle.module.scss'

type Props = {
  textTop: string
  textBottom?: string
}

/**
 *
 * @param textTop is require
 * @returns
 */

const SectionTitle = ({ textTop, textBottom }: Props) => {
  return (
    <div className={styles.title}>
      <div className={styles.titleText}>
        <Image src={line} alt='line' />
        <h1 className={russo.className}>{textTop}</h1>
      </div>
      <h1 className={`${russo.className} ${styles.text2}`}>{textBottom}</h1>
      <Image className={styles.bg} src={bg} alt='bg' />
    </div>
  )
}

export default SectionTitle
