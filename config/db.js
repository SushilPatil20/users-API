import mongoose from "mongoose";


export const connetDB = async (uri) => {
    try {
        await mongoose.connect(uri)
        console.log('DB Connected...');
    } catch (error) {
        console.log("MongoDB connection error :" + error.message)
        process.exit(1) // Exit process with failure
    }
}