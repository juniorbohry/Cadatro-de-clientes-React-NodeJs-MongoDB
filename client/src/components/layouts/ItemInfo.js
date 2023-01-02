import styles from './ItemInfo.module.css'
import { BsFillTrashFill, BsPencil } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function ItemInfo({id, nome, email, nascimento, telefone, idade, cpf, pais, estado, cidade, bairro, handleRemove}) {


    const remover = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

       
    return(
        <div className={styles.item_infor_container}>  
            <h2>Nome: {nome}</h2>  

            <div className={styles.dados}>
                <ul className={styles.dados_pessoais}>
                    <li className={styles.item}>
                        <p>Email:</p>
                        <p>{email}</p>
                    </li>
                    
                    <li className={styles.item}>
                        <p>Nascimento:</p>
                        <p>{nascimento}</p>
                    </li>
                    
                    <li className={styles.item}>
                        <p>Telefone:</p>
                        <p>{telefone}</p>
                    </li>
                    
                    <li className={styles.item}>
                        <p>Idade:</p>
                        <p>{idade}</p>
                    </li>
                    
                    <li className={styles.item}>
                        <p>CPF:</p>
                        <p>{cpf}</p>
                    </li>
                    
                </ul>

                <ul className={styles.dados_endereco}>
                    <li className={styles.item}>
                        <p>País:</p>
                        <p>{pais}</p>
                    </li>
                    
                    <li className={styles.item}>
                        <p>Estado:</p>
                        <p>{estado}</p>
                    </li>
                    
                    <li className={styles.item}>
                        <p>Cidade:</p>
                        <p>{cidade}</p>
                    </li>
                    
                    <li className={styles.item}>
                        <p>Bairro:</p>
                        <p>{bairro}</p>
                    </li>
                    
                </ul>

                <div className={styles.botoes}>
                    <button onClick={remover}>
                        <BsFillTrashFill />Excluir
                    </button>

                    <Link to={`/cadastro/edit/${id}`}>
                        <BsPencil /> Editar
                    </Link>

                </div>
                
                
            </div>
        </div>  
    )
}

export default ItemInfo