const { UserInputError } = require('apollo-server-errors');
const User = require('../../model/User');
const { validationRegisterInput } = require('../../utils/validations');
const { generateUserToken } = require('../helpers/auth');


module.exports = {
    Mutation: {
        async loginUser(_, args) {
            return {}
        },
        async registerUser(_, { registerInput: { email, fullName, confirmPassword, password } }) {
            const { errors, valid } = validationRegisterInput(email, fullName, confirmPassword, password);
            if (!valid) throw new UserInputError('Errors', { errors })

            await User.findOne({ email: email })
                .exec((res) => {
                    if (res) throw new UserInputError('email already in use', { errors: 'User already exists with email: ' + email });

                    password = bcrypt(password, 12);
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