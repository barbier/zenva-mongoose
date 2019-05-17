const express = require('express')
const router = express.Router()
const City = require('../models/City')

router.get('/', (req, res, next) => {
    const query = req.query

    City.find(query)
    .then(cities => {
        res.json({
            confirmation: 'Success',
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

router.get('/:id', (req, res, next) => {
    City.findById(req.params.id)
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