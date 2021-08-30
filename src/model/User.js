const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
    email: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    fullName: {
        type: 'string'
    }
})

module.exports = mongoose.model('Users', UsersSchema)