import { Russo_One } from 'next/font/google'
const russo = Russo_One({ weight: '400', subsets: ['latin'] })

import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '900', subsets: ['latin'] })

import styles from './ShoutingOut.module.scss'

const ShoutingOut = () => {
  return (
    <div className={styles.root}>
      <h2 className={russo.className}>БОЙОВИЙ КЛИЧ:</h2>
      <h3 className={roboto.className}>
        <span>Бути Воїном</span> — ЦЕ ЧЕСТЬ,
      </h3>
      <h3 className={roboto.className}>
        <span>Бути Герцем</span> — ЦЕ ВІДВАГА.
      </h3>
      <h3 className={roboto.className}>
        <span>Ми зродилися</span> В БОЮ,
      </h3>
      <h3 className={roboto.className}>
        <span>Для Вкраїни тричі</span> — СЛАВА, СЛАВА, СЛАВА!
      </h3>
    </div>
  )
}

export default ShoutingOut
