import mongoose from 'mongoose';

const dbConnection = (url) => {
    return mongoose.connect(url, { useNewUrlParser: true })
}
export default dbConnection;
