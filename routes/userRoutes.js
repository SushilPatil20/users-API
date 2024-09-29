import { notFound } from "../utils/helpers.js";
import User from "../models/userModel.js"

// ------------------- Getting all users  -------------------

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().lean(); // .lean method to optimize a performance.
        return res.status(200).json(users)

    } catch (error) {
        console.log("Error fetching data..", error);
    }
}

// ------------------- Getting single user by id  -------------------

export const getUser = async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id)
    if (!user) {
        return notFound(res);
    }
    else {
        res.status(200).json(user) // Return the found user
    }
}


// ------------------- Creating new user -------------------

export const createNewUser = async (req, res) => {
    const { firstName, lastName, hobbies } = req.body
    // ------------------- Creating new user if all required field are given -------------------
    const newUser = new User({
        firstName,
        lastName,
        hobbies: hobbies || []
    })
    const savedUser = await newUser.save();
    return res.status(201).json({ message: `New resource created`, user: savedUser });
}

// ------------------- Update User Details-------------------

export const updateUserDetails = async (req, res) => {
    const id = req.params.id
    const { firstName, lastName, hobbies } = req.body

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: {
                firstName,
                lastName,
                hobbies
            }
        }, { new: true });
        if (!updatedUser) {
            return notFound(res);
        }
        return res.status(200).json({ message: "User is Updated.", updatedUser: updatedUser })
    }
    catch (error) {
        return res.status(500).json({ message: "Error while updating user", error: error.message });
    }
}


// ------------------- Update User Details-------------------

export const deleteUser = async (req, res) => {
    const id = req.params.id

    // Fetch the user by _id
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
        return notFound(res);
    }
    return res.status(204).send();
}


// 404 not found
// 400 bad request invalid data
// 200 ok
// 201 new resourse is created
// 204 No content