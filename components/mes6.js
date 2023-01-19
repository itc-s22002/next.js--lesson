import styles from 'styles/about6.module.css'
const Mes6 = ({ title, items }) => {
  return (
    <div className={styles.box}>
      <h2>{title}</h2>
      <p className={styles.text}>{items}</p>
    </div>
  )
}
export default Mes6
