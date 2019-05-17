const express = require('express')
const mongoose = require('mongoose')

// connect to MongoDB
mongoose.connect('mongodb://localhost/world')
.then(data => {
    console.log('Connected')
})
.catch(err => {
    console.log(`Connection failed ${err}`)
})

const app = express()
const cities = require('./routes/cities')
const countries = require('./routes/countries')

app.use('/cities', cities)
app.use('/countries', countries)

app.listen(3000)
console.log('Running on localhost:3000')