import mongoose from 'mongoose';

const PostsSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    username: {
        type: 'string',
    },
    enrolled: {
        type: 'boolean'
    }
}, { timestamps: true })

export default mongoose.model('Posts', PostsSchema)