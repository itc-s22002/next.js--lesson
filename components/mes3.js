import styles from 'styles/about3.module.css'
import Link from 'next/link'
const Mes3 = ({ title }) => {
  return (
    <li className={styles.li}>
      <Link href='/about3'>
        <h1 className={styles.h1}>{title}</h1>
      </Link>
    </li>
  )
}
export default Mes3
