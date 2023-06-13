'use client'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import img1 from '../../assets/image/about-us-1.png'
import img2 from '../../assets/image/about-us-2.png'
import Image from 'next/image'

import styles from './SwiperGallery.module.scss'

const SwiperGallery = () => {
  return (
    <Carousel className={styles.root}>
      <div>
        <Image src={img1} alt='img' />
        <p className='legend'>Legend 1</p>
      </div>
      <div>
        <Image src={img2} alt='img' />
        <p className='legend'>Legend 2</p>
      </div>
    </Carousel>
  )
}

export default SwiperGallery
