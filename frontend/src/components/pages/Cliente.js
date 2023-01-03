import styles from './Cliente.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ItemInfo from '../layouts/ItemInfo'

function Cliente() {
    const [listaClientes, setListaClientes] = useState([])

    useEffect(() => {
        axios.get('/apicliente')
        .then((resp) => {
            const data = resp.data
            setListaClientes(data)
        })
    }, [])

    function removerCliente(id) {
        axios.delete(`/apicliente/${id}`)
        .then(() => {
            alert('Cliente removido com sucesso!')
            setListaClientes(listaClientes.filter((cliente) => cliente._id !== id))
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.cliente_Container}>
            {listaClientes.map((item) => (
                <ItemInfo
                    id= {item._id}
                    nome={item.nome}
                    email={item.email}
                    nascimento={item.dataNacimento}
                    telefone={item.telefone}
                    idade={item.idade}
                    cpf={item.cpf}
                    pais={item.Pais}
                    estado={item.estado}
                    cidade={item.cidade}
                    bairro={item.bairro}
                    key={item._id}
                    handleRemove= {removerCliente}
                /> 
            ))} 
        </div>
    )
}

export default Cliente