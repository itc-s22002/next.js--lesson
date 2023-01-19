import Mes from 'components/mes'
import styles from 'styles/about.module.css'

const Page = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Sample Website</h1>
      </header>
      <div className={styles.main}>
        <Mes
          title='Heading'
        />
        <Mes
          title='Heading 2'
        />
      </div>
      <div>
        <h2 className={styles.p2}>Copyright (c) 2013 xxxxxxxx. All rights reserved.</h2>
      </div>
    </>
  )
}

export default Page
