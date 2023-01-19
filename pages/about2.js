import styles from 'styles/about2.module.css'
import Mes from 'components/mes2.js'
const Page2 = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Prep Time</h1>
      <h2 className={styles.h2}>Headline</h2>
      <Mes
        title='Article 1'
      />
      <Mes
        title='Article 2'
      />
    </div>
  )
}
export default Page2
