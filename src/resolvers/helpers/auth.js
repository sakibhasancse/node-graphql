const jwt = require('jsonwebtoken');
const generateUserToken = ({ email, password }) => {
    return jwt.sign({ email, password }, process.env.REGISTER_SECRET_KEY, { expiresIn: '1h' })
}

module.exports = { generateUserToken }