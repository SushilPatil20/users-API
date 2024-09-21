import users from "./data/users.js"
import { v4 as uuidv4 } from "uuid";

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


// ------------------- Creating new user -------------------

export const createNewUser = (req, res) => {
    const user = req.body
    // ------------------- Creating new user if all required field are given -------------------
    const newUser = {
        id: uuidv4(), //  Generates a unique identifier
        ...user
    }

    users.push(newUser)
    return res.status(201).json({
        message: `New resource created`,
        users: users
    })
}

// ------------------- Update User Details-------------------

export const updateUserDetails = (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id == id) // Getting user by ID
    if (!user) {
        return res.status(404).json({ message: `User Not found..` })
    }
    const keys = Object.keys(user) // Getting all the keys 
    keys.forEach((key) => {
        user[key] = req.body[key] // Adding the updated values.
    })
    res.json(users);
}


// ------------------- Update User Details-------------------

export const deleteUser = (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id == id) // Getting user by ID
    if (!user) {
        return res.status(404).json({ message: `User Not found..` })
    }
    const newUsers = users.filter(user => user.id != id); // removing user by ID
    return res.json(newUsers);
}