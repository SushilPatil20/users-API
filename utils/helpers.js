
// ------------- Function to validate string -------------

/**
 * 
 * @param {String} value 
 * @returns boolen
 */
export const isValidString = (value) => {
    // Check if value is a string and is not an empty string
    return typeof value === 'string' && value.trim().length > 0;
}


// ------------- Function to check if there is any errors -------------
/**
 * 
 * @param {Array} errors 
 * @returns boolen
 */
export const checkIfErrors = (errors) => {
    return errors.length !== 0
}


/**
 * @param {object} res
 * @returns object
 */
export const notFound = (res) => {
    return res.status(404).json({ message: `User Not found..` })
}

