import mongoose from 'mongoose';
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

export default mongoose.model('Users', UsersSchema)