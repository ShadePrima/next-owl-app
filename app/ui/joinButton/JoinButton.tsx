import { Roboto } from 'next/font/google'
import styles from './JoinButton.module.scss'

const roboto = Roboto({ weight: '900', subsets: ['latin'] })

const JoinButton = () => {
  return (
    <div className={`${styles.root} ${roboto.className}`}>
      Вступити до полку_
    </div>
  )
}

export default JoinButton
