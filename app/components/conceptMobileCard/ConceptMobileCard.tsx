'use client'

import React from 'react'
import Slider from 'react-slick'

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import pricel from '../../assets/icons/target-alt.svg'
import arrow from '../../assets/icons/arrow-left-third.svg'
import Image from 'next/image'

import { conceptMobileList } from '../../data/conceptMobileList'

import styles from './conceptMobileCard.module.scss'

export default function ConceptMobileCard() {
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
      <Slider className={styles.slider} {...settings}>
        {conceptMobileList.map((item: any) => (
          <div key={item.id}>
            <div className={styles.card}>
              <div className={styles.iconRow}>
                <Image src={pricel} alt='pricel' />
                <Image src={arrow} alt='arrow' />
              </div>
              <p className={`${styles.text} ${roboto.className}`}>
                {item.text1}
              </p>
              <p className={`${styles.text} ${roboto.className}`}>
                {item.text2}
              </p>
              <p className={`${styles.text} ${roboto.className}`}>
                {item.text3}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
