import styles from 'styles/about3.module.css'
import Mes from 'components/mes3'
const Page3 = () => {
  return (
    <ul className={styles.ul}>
      <Mes title='TOP' />
      <Mes title='ABOUT' />
      <Mes title='NEWS' />
      <Mes title='LINK' />
    </ul>
  )
}
export default Page3
