import styles from 'styles/about5.module.css'
const Mes5 = ({ items, items1, items2 }) => {
  return (
    <ul className={styles.menu}>
      <li>{items}</li>
      <li>{items1}</li>
      <li>{items2}</li>
    </ul>
  )
}
export default Mes5
