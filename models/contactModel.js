const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    message: {
        required: true,
        type: String
    },
    time: {
        required: true,
        type: String
    },
    userID: {
        required: true,
        type: String
    },
    theripistID: {
        required: true,
        type: String
    },
    fromUser: Boolean,
    fromTherapist: Boolean
})


const contactModel = mongoose.model('contact', contactSchema)
module.exports = contactModel