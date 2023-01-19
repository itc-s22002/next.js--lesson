import styles from 'styles/about5.module.css'
import Mes from 'components/mes5'
const Page5 = () => {
  return (
    <div className={styles.box}>
      <h1 className={styles.h1}>Prep Mart</h1>
      <ul className={styles.col_3}>
        <li className={styles.li}>
          <h2 className={styles.h2}>Meat</h2>
          <Mes items='Beef' items1='Chicken' items2='Other' />
        </li>
        <li className={styles.li}>
          <h2 className={styles.h2_1}>Fish</h2>
          <Mes items='Tuna' items1='Chicken' items2='Other' />
        </li>
        <li className={styles.li}>
          <h2 className={styles.h2_2}>Vegetable</h2>
          <Mes items='Tomato' items1='Lettuce' items2='Other' />
        </li>
      </ul>
    </div>
  )
}
export default Page5
