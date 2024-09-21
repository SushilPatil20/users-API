import users from "./data/users.js"


// ------------------- Getting all users  -------------------
export const getUsers = (req, res) => {
    return res.status(200).json(users)
}

// ------------------- Getting single user by id  -------------------
export const getUser = (req, res) => {
    const userId = req.params.id
    const user = users.find(user => user.id == userId)
    if (!user) {
        return res.status(404).json({ message: 'User not found..' }) // return to exit the function 
    }
    else {
        res.status(200).json(user) // Return the found user
    }
}

export const createNewUser = (req, res) => {

}
