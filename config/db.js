import mongoose from "mongoose";

// const dbURL = ``;

export const connetDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log('DB Connected...');
    } catch (error) {
        console.log("Error in connection :" + error.message)
        process.exit(1) // Exit process with failure
    }
}