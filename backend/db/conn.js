const mongoose = require('mongoose')
require('dotenv').config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

async function main() {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterreactnode.j4yxzl8.mongodb.net/?retryWrites=true&w=majority`, {dbName: 'test'})
    console.log('Conectou com Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose
