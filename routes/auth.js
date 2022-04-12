const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/usersModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'qwe3q33r4rqerqwqe'

const router = express.Router()

//signup user with jwt and bcrypt
router.post('/signup', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                res.status(400).json({
                    message: 'User already exists'
                })
            } else {
                const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    country: req.body.country,

                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err
                        newUser.password = hash
                        newUser.save()
                            .then(user => {
                                res.json(user)
                            })
                            .catch(err => {
                                res.json({
                                    message: 'Error in saving user'
                                })
                            })
                    })
                }
                )
            }
        })
})

//signin with jwt and bcrypt
router.post('/signin', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                res.status(400).json({
                    message: 'User does not exist'
                })
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            const token = jwt.sign({ id: user._id }, JWT_SECRET)
                            // res.json({
                            //     message: 'User logged in successfully'
                            // })
                            res.json({token})
                        } else {
                            res.status(400).json({
                                message: 'Incorrect password'
                            })
                        }
                    })
            }
        })
})
