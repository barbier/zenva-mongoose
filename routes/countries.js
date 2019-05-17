const express = require('express')
const router = express.Router()
const Country = require('../models/Country')

router.get('/', (req, res, next) => {
    const query = req.query

    Country.find(query)
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

router.get('/:id', (req, res, next) => {
    Country.findById(req.params.id)
    .then(city => {
        res.json({
            confirmation: 'Success',
            data: city,
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'Fail',
            data: `Error: ${err}`,
        })
    })
})

module.exports = router