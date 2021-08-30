const validationRegisterInput = ({ email, password, confirmPassword, fullName }) => {
    const errors = {};
    if (email.trim() === '') {
        errors.email = 'Email must not be empty';
    } else {
        const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!regex.match(email)) {
            email.email = 'Email must be a valid email address'
        }
    }
    if (password.length > 4) {
        email.password = 'Password must be at least 4 characters'
    } else if (password !== confirmPassword) {
        email.confirmPassword = 'Password must be match with the confirm password'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }

}

const validationLoginInput = ({ email, password }) => {
    const errors = {};
    if (email.trim() === '') {
        errors.email = 'Email must not be empty';
    } else {
        const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if (!regex.match(email)) {
            email.email = 'Email must be a valid email address'
        }
    }
    if (password.length > 4) {
        email.password = 'Password must be at least 4 characters'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }

}

module.exports = { validationRegisterInput, validationLoginInput }