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

router.get('/add', (req, res, next) => {
    const details = req.query

    Country.create(details)
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
    const countryId = req.params.id

    Country.findByIdAndUpdate(countryId, updatedDetails, {new: true})
    .then(country => {
        res.json({
            confirmation: 'Success',
            data: country,
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