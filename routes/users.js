const express = require('express')
const router = express.Router()
const usersModel = require('../models/usersModel')

const apiRes = {
    isSussessful: true,
    data: null,
    message: null,
    status: null
}

//get all users from usersModel
router.get('/', (req, res) => {
    // res.send("All Users")
    usersModel.find({}, (err, users) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in getting users'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = users 
            apiRes.status = 200
            apiRes.message = 'Users are fetched successfully'
            apiRes.isSussessful = true
            res.status(200).send(apiRes)
        }
    })
})

//get user by id
router.get('/:id', (req, res) => {
    usersModel.findById(req.params.id, (err, user) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in getting user'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = user
            apiRes.status = 200
            apiRes.message = 'User is fetched successfully'
            apiRes.isSussessful = true
            res.status(200).send(apiRes)
        }
    })
})

//post user
router.post('/', (req, res) => {
    const newUser = new usersModel(req.body)
    newUser.save((err, user) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in saving user'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = user
            apiRes.status = 200 
            apiRes.message = 'User is saved successfully'
            apiRes.isSussessful = true
            res.status(200).send(apiRes)
        }
    })
})


//update user
router.put('/:id', (req, res) => {
    usersModel.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in updating user'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = user
            apiRes.status = 200
            apiRes.message = 'User is updated successfully'
            apiRes.isSussessful = true
            res.status(200).send(apiRes)
        }
    })
})


//delete user
router.delete('/:id', (req, res) => {
    usersModel.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            apiRes.isSussessful = false
            apiRes.message = 'Error in deleting user'
            apiRes.status = 404
            apiRes.data = err
            res.status(apiRes.status).json(apiRes)
        } else {
            apiRes.data = user
            apiRes.status = 200
            apiRes.message = 'User is deleted successfully'
            apiRes.isSussessful = true
            res.status(200).send(apiRes)
        }
    })
})



module.exports = router