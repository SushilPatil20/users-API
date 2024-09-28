import users from "../data/users.js"
import { v4 as uuidv4 } from "uuid";
import { notFound } from "../utils/helpers.js";

// ------------------- Getting all users  -------------------

export const getUsers = (req, res) => {
    return res.status(200).json(users)
}

// ------------------- Getting single user by id  -------------------

export const getUser = (req, res) => {
    const userId = req.params.id
    const user = users.find(user => user.id == userId)
    if (!user) {
        notFound(res);
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
    });
}

// ------------------- Update User Details-------------------

export const updateUserDetails = (req, res) => {
    const id = req.params.id
    const { firstName, lastName, hobby } = req.body
    const userIndex = users.findIndex(user => user.id == id) // Getting user index

    if (userIndex === -1) {
        notFound(res)
    }

    const updatedUser = {
        ...users[userIndex], // Copying the previous object (existing user)
        firstName: firstName,
        lastName: lastName,
        hobby: hobby
    }
    users[userIndex] = updatedUser // Replacing updated object.
    res.json(users);
}


// ------------------- Update User Details-------------------

export const deleteUser = (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id == id) // Finding user by ID
    if (!user) {
        notFound(res);
    }
    users.filter(user => user.id != id); // Removing user by ID
    return res.status(204).send();
}


// 404 not found
// 400 bad request invalid data
// 200 ok
// 201 new resourse is created
// 204 No content