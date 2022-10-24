require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const clienteRoutes = require('../routes/clienteRoutes')
const path = require('path')

const PORT = process.env.PORT || 3001;
const app = express();

// app.use(
//     express.urlencoded({        
//         extended: true
//     })
// )
app.use(express.json())

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/cliente', clienteRoutes)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

//conexão com o Banco de dados e inicialização do servidor
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterreactnode.j4yxzl8.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('conectado ao MongoDB');

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta: ${PORT}`);
    })
})
.catch((err) => {
    console.log(err);
})


