const Cliente = require('../models/Cliente')

module.exports = class ClienteController {
    //Registrar cliente
    static async registrarCliente(req, res) {
        const {nome, email, dataNacimento, telefone, cpf, idade, Pais, estado, cidade, bairro} = req.body
    
        if(!nome) {
            res.status(422).json({error: 'O nome é obrigatório!'})
            return
        }
        if(!email) {
            res.status(422).json({error: 'O email é obrigatório!'})
            return
        }
        if(!dataNacimento) {
            res.status(422).json({error: 'A data de nascimento é obrigatória!'})
            return
        }
        if(!telefone) {
            res.status(422).json({error: 'O telefone é obrigatório!'})
            return
        }
        if(!cpf) {
            res.status(422).json({error: 'O cpf é obrigatório!'})
            return
        }
        if(!idade) {
            res.status(422).json({error: 'A idade é obrigatória!'})
            return
        }
        if(!Pais) {
            res.status(422).json({error: 'o país é obrigatório!'})
            return
        }
        if(!estado) {
            res.status(422).json({error: 'O estado é obrigatório!'})
            return
        }
        if(!cidade) {
            res.status(422).json({error: 'A cidade é obrigatória!'})
            return
        }
        if(!bairro) {
            res.status(422).json({error: 'O bairro é obrigatório!'})
            return
        }
    
        const cliente = {
            nome,
            email,
            dataNacimento,
            telefone,
            cpf,
            idade,
            Pais,
            estado,
            cidade,
            bairro
        }
    
        try {
            await Cliente.create(cliente)
            res.status(201).json({message: 'Cliente registrado com sucesso!'})
        } catch(error) {
            res.status(500).json({message: error})
        }
    }

    //Buscar todos clientes
    static async buscarTodosClientes(req, res) {
        try {
            const cliente = await Cliente.find()
            res.status(200).json(cliente)
        } catch(error) {
            res.status(500).json({error: error})
        }
    }

    //Buscar cliente por id
    static async buscarClientePorId(req, res) {
        const id = req.params.id

        try {
            const cliente = await Cliente.findOne({_id: id})
            if(!cliente) {
                res.status(422).json({message: 'Cliente não foi encontrado!'})
                return
            }
            res.status(200).json(cliente)
        } catch(error) {
            res.status(500).json({error: error})
        }
    }

    //Atualizar cliente por id
    static async atualizarClientePorId(req, res) {
        const id = req.params.id
        const {nome, email, dataNacimento, telefone, cpf, idade, Pais, estado, cidade, bairro} = req.body
        const cliente = {
            nome,
            email,
            dataNacimento,
            telefone,
            cpf,
            idade,
            Pais,
            estado,
            cidade,
            bairro
        }
        
        try {
            const updatedCliente = await Cliente.updateOne({_id: id}, cliente)
    
            if(updatedCliente.matchedCount === 0) {                      
                res.status(422).json({message: 'Cliente não foi encontrado!'})
                return
            }
            res.status(201).json({message: 'Cliente atualizado com sucesso!'})
            // res.status(200).json(cliente)
        } catch(error) {
            res.status(500).json({error: error})
        }
    }

    //remover cliente por id
    static async removerClientePorId(req, res) {
        const id = req.params.id
        const cliente = await Cliente.findOne({_id: id})
        
        if(!cliente) {
            res.status(422).json({message: 'Cliente não foi encontrado!'})
            return
        }

        try {
            await Cliente.deleteOne({_id: id})
            res.status(200).json({message: 'Cliente removido com sucesso!'})
        } catch(error) {
            res.status(500).json({error: error})
        }
    }
}