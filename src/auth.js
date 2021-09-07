import jwt from 'jsonwebtoken';


const generateUserToken = ({ email, password }) => {
    return jwt.sign({ email, password }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
}

const isAuthenticated = (req) => {
    // getting the authorization information
    const authHeader = req.headers['authorization'];
    // In our case It's JWT authantication
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return null // No token found;

    // verify if there is a user corrosponding to the token found in the 
    // authorization header.
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return null // The token is there but it's not valid;
        // if the token is valid, i.e the user is present, then in the request we are 

        //returning the user's access'
        return user
    })

}

module.exports = { generateUserToken, isAuthenticated }