import styles from 'styles/about.module.css'
const Mes = ({title}) => {
  return (
    <>
      <h1 className={styles.h1}>{title}</h1>
      <p className={styles.p}>
        Content comes here. Content comes here. Content comes here.
      </p>
      <p className={styles.p}>
        Content comes here. Content comes here. Content comes here.
      </p>
    </>
  )
}

export default Mes
