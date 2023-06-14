'use client'

import React from 'react'
import Slider from 'react-slick'

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import plusButton from '../../assets/icons/plus.svg'
import pricel from '../../assets/icons/red-pricel.svg'
import Image from 'next/image'

import { combatList } from '../../data/combatList'

import styles from './CombatCarusel.module.scss'

type Props = {
  next: () => void
  prev: () => void
  sliderRef: React.LegacyRef<Slider>
}

export default function CombatCarusel({ next, prev, sliderRef }: Props) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className='container'>
      <div className={styles.lineTop}></div>
      <Slider ref={sliderRef} className={styles.slider} {...settings}>
        {combatList.map((item: any) => (
          <div key={item.id}>
            <div className={styles.card}>
              <Image src={pricel} alt='pricel' />
              <h2 className={styles.title}>{item.title}</h2>
              <p className={roboto.className}>{item.text1}</p>
              <p className={`${roboto.className} ${styles.text2}`}>
                {item.text2}
              </p>
              <ul>
                {item.li1 && <li>{item.li1}</li>}
                {item.li2 && <li>{item.li2}</li>}
              </ul>

              {/* <Image
                className={styles.plusButton}
                src={plusButton}
                alt='plus'
              /> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
