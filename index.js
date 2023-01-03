require('dotenv').config()
const express = require('express')
const cors = require('cors')
const conn = require('./db/conn')

const PORT = process.env.PORT || 3001;
const app = express();

// Config JSON response
app.use(express.json())

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

// Routes
const ClienteRoutes = require('./routes/ClienteRoutes')
app.use('/apicliente', ClienteRoutes)


// conn
// .sync()
//     // .sync({force: true})
// .then(() => {
//     app.listen(PORT)
// })
// .catch((err) => console.log(err))

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
})

