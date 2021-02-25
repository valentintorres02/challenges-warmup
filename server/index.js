const express = require('express')
const app = express()

const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Password123',
    database: 'posts',
})

app.listen(3001, () => console.log(`Server running`))