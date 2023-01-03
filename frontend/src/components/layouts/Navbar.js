import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.module.css'


function Navbar() {
    const [buttonHome, setButtonHome] = useState("ativado")
    const [buttonClientes, setButtonClientes] = useState("desativado")

    function changeStyleHome() {
        setButtonClientes("desativado");
        setButtonHome("ativado")
    }

    function changeStyleClientes() {
        setButtonHome("desativado");
        setButtonClientes("ativado")
    }


    return(
        <nav className={styles.navbar}>
            
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <Link to="/" onClick={changeStyleHome} className={styles[buttonHome]}>HOME</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/cliente" onClick={changeStyleClientes} className={styles[buttonClientes]}>CLIENTES</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar