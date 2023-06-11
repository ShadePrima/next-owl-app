'use client'

import React from 'react'
import YouTube from 'react-youtube'

import border1 from '../../assets/icons/video-border-1.png'
import border2 from '../../assets/icons/video-border-2.png'
import border3 from '../../assets/icons/video-border-3.png'
import border4 from '../../assets/icons/video-border-4.png'

import styles from './VideuPlayer.module.scss'
import Image from 'next/image'

const VideoPlayer = () => {
  const [screenWidth, setScreenWidth] = React.useState<number>(734)

  const videoRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (videoRef.current) {
      const videoWidth = videoRef?.current?.clientWidth
      setScreenWidth(videoWidth)
    }
  }, [screenWidth])

  const opts = {
    height: '348',
    width: screenWidth - 50,
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div className={styles.root} ref={videoRef}>
      <Image className={styles.border1} src={border1} alt='border' />
      <Image className={styles.border2} src={border2} alt='border' />
      <Image className={styles.border3} src={border3} alt='border' />
      <Image className={styles.border4} src={border4} alt='border' />

      <div className={styles.video}>
        <YouTube videoId='IT8gz3u--8A' opts={opts} />
      </div>
    </div>
  )
}

export default VideoPlayer
