import styles from 'styles/about6.module.css'
import Mes from 'components/mes6'
const Page6 = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.titles}>Layout</h1>
      <div className={styles.grid}>
        <Mes title='Box 1' items={'hello world hello world hello world hello world \n \nhello world hello world hello world hello world'} />
        <Mes title='Box 2' items='hello world hello world hello world hello world hello world hello world hello world hello world' />
      </div>
      <div className={styles.grid}>
        <Mes title='Box 3' items='hello world hello world hello world hello world hello world hello world hello world hello world' />
        <Mes title='Box 4' items='hello world hello world hello world hello world hello world hello world hello world hello world' />
      </div>
    </div>
  )
}
export default Page6
