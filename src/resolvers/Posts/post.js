const Post = require('../../model/Post');
module.exports = {
    Query: {
        async getPosts() {
            await Post.find()
                .then((res) => {
                    return res
                }).catch((err) => {
                    throw new Error(err);
                })

        },
        async createPosts() {
            await Post.find()
                .then((res) => {
                    return res
                }).catch((err) => {
                    throw new Error(err);
                })

        }
    }
}