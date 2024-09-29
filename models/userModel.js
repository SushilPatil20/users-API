import mongoose from "mongoose";
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
const User = mongoose.model('User', userSchema);
export default User;
