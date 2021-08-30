
const posts = require('./Posts/post')
const users = require('./Users/user')

module.exports = {
    Query: {
        ...posts.Query,
    },
    Mutation: {
        ...users.Mutation
    }
}