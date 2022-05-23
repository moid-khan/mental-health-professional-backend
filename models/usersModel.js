    const mongoose = require('mongoose')

    const usersSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {    
            type: String,
              required: true
        },
        password: {
            type: String,
            required: true
        },
        country: String,
        gender: String,
        profileType: String,
        education: String
    })

    const usersModel = mongoose.model('users', usersSchema)
    module.exports = usersModel