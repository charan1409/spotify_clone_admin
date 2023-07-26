import styles from './navbar.module.css'

const navbar = () => {
  return (
    <div className={styles.navbar}>
      <p>Welcome to admin page of <span>spotify clone</span>.    Here we can add songs to the database</p>
    </div>
  )
}

export default navbar
