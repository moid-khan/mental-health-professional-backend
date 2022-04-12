const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema({
    sessionTitle: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: Date
    },
    timeTo: {
        required: true,
        type: String
    },
    timeFrom: {
        required: true,
        type: String
    },
    noOfHours:{
        required: true,
        type: Number
    },
    language: String,
    description: {
        required: true,
        type: String
    },
    availablity: {
        required: true,
        type: Boolean
    }
})

const sessionsModel = mongoose.model('sessions', sessionSchema)
module.exports = sessionsModel