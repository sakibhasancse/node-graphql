
const posts = require('./Posts/posts')
const users = require('./users')

module.exports = {
    Query: {
        ...posts.Query,
    },
    Mutation: {
        ...users.Mutation
    }
}