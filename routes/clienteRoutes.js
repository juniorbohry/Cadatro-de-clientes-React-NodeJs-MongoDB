const router = require('express').Router();
const Cliente = require('../models/Cliente')

router.post('/', async (req, res) => {
    const {nome, email, dataNacimento, telefone, cpf, idade, Pais, estado, cidade, bairro} = req.body
    
    if(!nome) {
        res.status(422).json({error: 'o nome é obrigatório!'})
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
        res.status(201).json({message: 'Cliente inserido com sucesso!'})
    } catch(error) {
        res.status(500).json({message: error})
    }

})

router.get('/', async (req, res) => {
    
    try {
        const cliente = await Cliente.find()
        res.status(200).json(cliente)
    } catch(error) {
        res.status(500).json({error: error})
    }
})

router.get('/:id', async (req, res) => {
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
})

router.patch('/:id', async (req, res) => {
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
        
        res.status(200).json(cliente)

    } catch(error) {
        res.status(500).json({error: error})
    }
})

router.delete('/:id', async (req, res) => {
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
})

module.exports = router
