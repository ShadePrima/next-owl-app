'use client'

import React from 'react'
import Image from 'next/image'

import SectionTitle from '@/app/ui/sectionTitle/SectionTitle'

import btnLeft from '../../assets/icons/btn-left.svg'
import btnRight from '../../assets/icons/btn-right.svg'

import CombatCarusel from '../combatCarusel/CombatCarusel'
import MobileTitle from '@/app/ui/mobileTitle/MobileTitle'

import styles from './CombatPath.module.scss'
import Slider from 'react-slick'

const CombatPath = () => {
  const sliderRef = React.useRef<Slider>(null)

  const handleNext = () => {
    console.log('next')
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  const handlePrev = () => {
    console.log('prev')
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  return (
    <div id='combat-path' className={styles.root}>
      <div className={`${styles.titleRow} ${'container'}`}>
        <SectionTitle textTop='Бойовий шлях' />
        <div className={styles.buttons}>
          <button onClick={handlePrev} className={styles.buttonLeft}>
            <Image src={btnLeft} alt='button Left' />
          </button>
          <button onClick={handleNext} className={styles.buttonRight}>
            <Image src={btnRight} alt='button right' />
          </button>
        </div>
      </div>
      <div className='container'>
        <MobileTitle title='Бойовий шлях' lineHeight='50px' />
      </div>

      <CombatCarusel
        next={handleNext}
        prev={handlePrev}
        sliderRef={sliderRef}
      />
    </div>
  )
}

export default CombatPath
