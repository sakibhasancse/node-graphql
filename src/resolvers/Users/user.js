const { UserInputError } = require('apollo-server-errors');
const Post = require('../../model/Post');
const User = require('../../model/User');
const { validationRegisterInput } = require('../../utils/validations');
const { generateUserToken } = require('./helpers');


module.exports = {
    Mutation: {
        async loginUser(_, args) {

        },
        async registerUser(_, { registerInput: { email, fullName, confirmPassword, password } }) {
            const { errors, valid } = validationRegisterInput(email, fullName, confirmPassword, password);
            if (!valid) throw new UserInputError('Errors', { errors })

            await User.findOne({ email: email })
                .exec((res) => {
                    if (res) throw new UserInputError('email already in use', { errors: 'User already exists with email: ' + email });

                    password = await bcrypt(password, 12);
                    const token = generateUserToken(email, fullName);
                    const newUser = new User({ email, password, fullName, createdAt: Date.now().toISOString() });
                    await newUser.save((result, errors) => {
                        return {
                            result,
                            token
                        }
                    })
                });
        },
        async logOut() {

        }
    }
}