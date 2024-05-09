import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo_container}>
            <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="header logo not found" 
            className="header_logo"
            />
        </div>
        <div className={styles.nav_items}>
            <ul>
                <li> home </li>
                <li> about us </li>
                <li> contact us </li>
                <li> cart </li>
            </ul>
        </div>
    </div>
  )
}

export default Header;