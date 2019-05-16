const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use('/', (req, res, next) => {
    res.json({
        configmation: 'success',
        data: 'This is mongo project',
    })
})

app.listen(3000)
console.log('Running on localhost:3000')