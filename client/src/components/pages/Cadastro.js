import styles from './Cadastro.module.css'
import Input from '../layouts/formulario/Input'
import Submit from '../layouts/formulario/Submit'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cadastro() {
    const navigate = useNavigate()
    const [cliente, setCliente] = useState({})

    function createPost(cliente) {
        axios.post('/cliente', {
            nome: cliente.nome ,
            email:cliente.email ,
            dataNacimento: cliente.dataNacimento,
            telefone: cliente.telefone ,
            cpf: cliente.cpf,
            idade: cliente.idade,
            Pais: cliente.Pais ,
            estado: cliente.estado ,
            cidade: cliente.cidade,
            bairro: cliente.bairro
        })
        .then(() => {
            console.log('post realizado!')
            alert('Cliente inserido no bando de dados com sucesso!')
            navigate('/cliente')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const submit = (e) => {
        e.preventDefault()
        createPost(cliente)
    }

    function handleChange(e) {
        setCliente({...cliente, [e.target.name]: e.target.value})
        console.log(cliente)
    }

    return(
        <div className={styles.cadastro_container}>
            <h1>Cadastro de clientes</h1>

            <form onSubmit={submit} className={styles.formulario}>
                <Input 
                    type="text" 
                    text="Nome completo:" 
                    name="nome" 
                    placeholder="Insira o nome completo"
                    handleOnChange={handleChange}
                    value={cliente.nome ? cliente.nome : ''}
                />

                <Input 
                    type="text" 
                    text="Email:" 
                    name="email" 
                    placeholder="Insira o email"
                    handleOnChange={handleChange}
                    value={cliente.email ? cliente.email : ''}
                />

                <Input 
                    type="text" 
                    text="Data de nascimento:" 
                    name="dataNacimento" 
                    placeholder="Insira a data de nascimneto"
                    handleOnChange={handleChange}
                    value={cliente.dataNacimento ? cliente.dataNacimento : ''}
                />

                <Input 
                    type="text" 
                    text="Telefone:" 
                    name="telefone" 
                    placeholder="Insira o telefone"
                    handleOnChange={handleChange}
                    value={cliente.telefone ? cliente.telefone : ''}
                />

                <Input 
                    type="text" 
                    text="CPF:" 
                    name="cpf" 
                    placeholder="Insira o cpf"
                    handleOnChange={handleChange}
                    value={cliente.cpf ? cliente.cpf : ''}
                />

                <Input 
                    type="number" 
                    text="Idade:" 
                    name="idade" 
                    placeholder="Insira a idade"
                    handleOnChange={handleChange}
                    value={cliente.idade ? cliente.idade : ''}
                />

                <Input 
                    type="text" 
                    text="País:" 
                    name="Pais" 
                    placeholder="Insira o país"
                    handleOnChange={handleChange}
                    value={cliente.Pais ? cliente.Pais : ''}
                />

                <Input 
                    type="text" 
                    text="Estado:" 
                    name="estado" 
                    placeholder="Insira o estado"
                    handleOnChange={handleChange}
                    value={cliente.estado ? cliente.estado : ''}
                />

                <Input 
                    type="text" 
                    text="Cidade:" 
                    name="cidade" 
                    placeholder="Insira a cidade"
                    handleOnChange={handleChange}
                    value={cliente.cidade ? cliente.cidade : ''}
                />

                <Input 
                    type="text" 
                    text="Bairro:" 
                    name="bairro" 
                    placeholder="Insira o bairro"
                    handleOnChange={handleChange}
                    value={cliente.bairro ? cliente.bairro : ''}
                />

                <Submit text='Enviar' />
            </form>
        </div>
    )
}

export default Cadastro