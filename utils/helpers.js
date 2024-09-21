
// ------------- Function to validate string -------------

export const isValidString = (value) => {
    // Check if value is a string and is not an empty string
    return typeof value === 'string' && value.trim().length > 0;
}

// ------------- Function to check if there is any errors -------------

export const checkIfErrors = (errors) => {
    return errors.length !== 0
}

