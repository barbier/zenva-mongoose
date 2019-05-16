const express = require('express')
const mongoose = require('mongoose')
const City = require('./models/City')
const Country = require('./models/Country')

// connect to MongoDB
mongoose.connect('mongodb://localhost/world')
.then(data => {
    console.log('Connected')
})
.catch(err => {
    console.log(`Connection failed ${err}`)
})

const app = express()

app.get('/', (req, res, next) => {
    res.json({
        configmation: 'success',
        data: 'This is mongo project',
    })
})

app.get('/cities', (req, res, next) => {
    City.find(null)
    .then(cities => {
        res.json({
            confirmation: 'Fail',
            data: cities,
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'Fail',
            data: `Error: ${err}`,
        })
    })
})

app.get('/countries', (req, res, next) => {
    Country.find(null)
    .then(countries => {
        res.json({
            confirmation: 'Fail',
            data: countries,
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'Fail',
            data: `Error: ${err}`,
        })
    })
})

app.listen(3000)
console.log('Running on localhost:3000')