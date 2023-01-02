import styles from './Home.module.css'
import cloudComputing from '../../img/cloud-computing.png'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <div className={styles.home_container}>
            <div className={styles.conteudo}>
                <h1>Bem-vindo ao sistema de cadastro</h1>
                <p>Clique no botão abaixo para cadastrar um novo cliente </p>
            </div>

            <Link className={styles.btn} to="/cadastro">Cadastrar</Link>

            <div className={styles.imagem}>
                <img src={cloudComputing} alt="imagem banco de dados" />
            </div> 
        </div>
    )
}

export default Home