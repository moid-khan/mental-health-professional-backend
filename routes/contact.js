const express = require('express')
const router = express.Router()

const contactModel = require('../models/contactModel')

const apiRes = {
    isSussessful: true,
    data: null,
    message: null,
    status: null
}

//get all contacts from contactModel
router.get('/', (req, res) => {
    contactModel.find({}, (err, contacts) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in getting contacts'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = contacts 
            apiRes.status = 200
            res.status(200).send(apiRes)
        }
    })
}
)

//get contacts by id
router.get('/:id', (req, res) => {
    contactModel.findById(req.params.id, (err, contact) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in getting contact'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = contact
            apiRes.status = 200
            res.status(200).send(apiRes)
        }
    })
}
)

//post contact
router.post('/', (req, res) => {
    const newContact = new contactModel(req.body)
    newContact.save((err, contact) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in saving contact'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = contact 
            apiRes.status = 200
            res.status(200).send(apiRes)
        }
    })
}
)

//update contact
router.put('/:id', (req, res) => {
    contactModel.findByIdAndUpdate(req.params.id, req.body, (err, contact) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in updating contact'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = contact
            apiRes.status = 200
            res.status(200).send(apiRes)
        }
    })
}
)

//delete contact
router.delete('/:id', (req, res) => {
    contactModel.findByIdAndRemove(req.params.id, (err, contact) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in deleting contact'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = contact
            apiRes.status = 200
            res.status(200).send(apiRes)
        }
    })
}
)


module.exports = router