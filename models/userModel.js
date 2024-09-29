import mongoose from "mongoose";

// ---------------------------- User schema ----------------------------
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true // Removes whitespace from the beginning and end
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    hobbies: {
        type: [String],
    }
}, { timestamps: true })

// ---------------------------- Adding the schema to User Collection. ----------------------------
const User = mongoose.model('User', userSchema);
export default User;
