const { UserInputError } = require('apollo-server-errors');
const User = require('../../model/User');
const { validationRegisterInput, validationLoginInput } = require('../../utils/validations');
const { generateUserToken } = require('../helpers/auth');
const bcrypt = require('bcryptjs');


module.exports = {
    Mutation: {
        async loginUser(_, { loginInput: { email, password } }) {
            const { errors, valid } = validationLoginInput(email, password);
            if (!valid) throw new UserInputError('Errors', { errors });

            const userInfo = await User.findOne({ email: email });
            if (!userInfo) throw new UserInputError('email already in use', { errors: 'User not exists with email: ' + email });

            const isMathPassword = await bcrypt.compare(userInfo.password, 128);
            if (!isMathPassword) throw new UserInputError(errors, 'Email and password not match');
            userInfo.password = undefined;

            const token = generateUserToken(email, password)
            return {
                userInfo,
                token
            }
        },
        async registerUser(_, { registerInput: { email, fullName, confirmPassword, password } }) {
            const { errors, valid } = validationRegisterInput(email, fullName, confirmPassword, password);
            if (!valid) throw new UserInputError('Errors', { errors })

            await User.findOne({ email: email })
                .exec((res) => {
                    if (res) throw new UserInputError('email already in use', { errors: 'User already exists with email: ' + email });

                    password = bcrypt.hash(password, 12);
                    const token = generateUserToken(email, password);

                    const newUser = new User({ email, password, fullName, createdAt: Date.now().toISOString() });
                    newUser.save((result, error) => {
                        if (error) throw new error(error);
                        return {
                            result,
                            token
                        }
                    })
                });
        }
    }
}