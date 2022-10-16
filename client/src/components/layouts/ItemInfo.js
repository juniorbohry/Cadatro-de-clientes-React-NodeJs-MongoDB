import styles from './ItemInfo.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

function ItemInfo({id, nome, email, nascimento, telefone, idade, cpf, pais, estado, cidade, bairro, handleRemove}) {
    const remover = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
       
    return(
        <div className={styles.item_infor_container}>  
            <h2>Nome: {nome}</h2>  

            <div className={styles.dados}>
                <div className={styles.dados_pessoais}>
                    <p>
                        <span>Email:</span> {email}
                    </p>

                    <p>
                        <span>Nascimento:</span> {nascimento}
                    </p>

                    <p>
                        <span>Telefone:</span> {telefone}
                    </p>

                    <p>
                        <span>Idade:</span> {idade}
                    </p>

                    <p>
                        <span>CPF:</span> {cpf}
                    </p>
                </div>

                <div className={styles.dados_endereco}>
                    <p>
                        <span>País:</span> {pais}
                    </p>

                    <p>
                        <span>Estado:</span> {estado}
                    </p>

                    <p>
                        <span>Cidade:</span> {cidade}
                    </p>

                    <p>
                        <span>Bairro:</span> {bairro}
                    </p>
                </div>

                <button onClick={remover}>
                    <BsFillTrashFill />Excluir
                </button>
            </div>
        </div>  
    )
}

export default ItemInfo