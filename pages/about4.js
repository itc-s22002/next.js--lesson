import styles from 'styles/about4.module.css'
const Page4 = () => {
  return (
    <div className={styles.box}>
      <style jsx global>{`
      body{background-color: #EDC;}
    `}
      </style>
      <div className={styles.head}>
        <h1 className={styles.h1}>Cafe Prep</h1>
      </div>
      <div className={styles.bo}>
        <h2 className={styles.h2}>Drink</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>Coffee</li>
          <li>Latte</li>
          <li>Espresso</li>
        </ul>
      </div>
    </div>
  )
}
export default Page4
