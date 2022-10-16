import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'


function Navbar() {
    return(
        <nav className={styles.navbar}>
            
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <Link to="/">HOME</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/cliente">CLIENTES</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar