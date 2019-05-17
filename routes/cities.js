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

router.get('/add', (req, res, next) => {
    const details = req.query

    City.create(details)
    .then(details => {
        res.json({
            confirmation: 'Success',
            data: details,
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'Fail',
            datta: err.message
        })
    })
})

router.get('/update/:id', (req, res, next) => {
    const updatedDetails = req.query
    const cityId = req.params.id

    City.findByIdAndUpdate(cityId, updatedDetails, {new: true})
    .then(cit => {
        res.json({
            confirmation: 'Success',
            data: cit,
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'Fail',
            datta: err.message
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