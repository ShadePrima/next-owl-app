import styles from './HelpButton.module.scss'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '900', subsets: ['latin'] })

const HelpButton = () => {
  return (
    <button className={`${styles.root} ${roboto.className}`}>
      I CAN HELP_
    </button>
  )
}

export default HelpButton
