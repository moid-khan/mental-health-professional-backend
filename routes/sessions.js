const express = require('express')

const router = express.Router()


const sessionsModel = require('../models/sessionsModel')

const apiRes = {
    isSussessful: true,
    data: null,
    message: null,
    status: null
}

//get all sessions from sessionsModel
router.get('/', (req, res) => {
    sessionsModel.find({}, (err, sessions) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in getting sessions'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = sessions 
            apiRes.status = 200
            res.status(200).send(apiRes)
        }
    })
}
)

//get session by id
router.get('/:id', (req, res) => {
    sessionsModel.findById(req.params.id, (err, session) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in getting session'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = session
            apiRes.status = 200
            res.status(200).send(apiRes)
        }
    })
}
)

//post session
router.post('/', (req, res) => {
    const newSession = new sessionsModel(req.body)
    newSession.save((err, session) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in saving session'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = session
            apiRes.status = 200
            res.status(200).send(apiRes)
        }
    })
}
)

//update session
router.put('/:id', (req, res) => {
    sessionsModel.findByIdAndUpdate(req.params.id, req.body, (err, session) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in updating session'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = session
            apiRes.status = 200
            res.status(200).send(apiRes)
        }
    })
}
)

//delete session
router.delete('/:id', (req, res) => {
    sessionsModel.findByIdAndRemove(req.params.id, (err, session) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in deleting session'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = session
            apiRes.status = 200
            res.status(200).send(apiRes)
        }
    })
}
)

module.exports = router