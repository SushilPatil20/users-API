import { checkIfErrors, isValidString } from "../utils/helpers.js"

// ------------------- Validation logic gose here -------------------

const validateFields = (req, res, next) => {
    const errors = []
    const user = req.body
    const requiredFields = ['firstName', 'lastName', 'hobby']
    const keys = Object.keys(user) // Getting all the keys from body

    // ------------------- Validations for all required fileds -------------------
    requiredFields.forEach(field => {
        if (!keys.includes(field) || !user[field]) {
            errors.push(`${field} is required.`)
        }
    })

    if (checkIfErrors(errors)) return res.status(400).json(errors) // Return errors if required filed is missing. 

    // ------------------- Check if entered data is valid ------------------- 

    if (!isValidString(user.firstName)) {
        errors.push(`firstName must be valid string.`);
    }
    if (!isValidString(user.lastName)) {
        errors.push(`lastName must be valid string.`);
    }
    if (!isValidString(user.hobby)) {
        errors.push(`hobby must be valid string.`);
    }

    if (checkIfErrors(errors)) return res.status(400).json(errors) // Return errors if there is a invalid data.

    next(); // Passes control to the next middleware function.
}

export default validateFields;