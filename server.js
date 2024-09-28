import express from "express";
import { config as configDotenv } from "dotenv"; // Explicit import

// Load environment variables from .env file
configDotenv();

import { connetDB } from "./config/db.js"

// -------------- Middlerware to log the request details on every request. --------------
import requestLogger from "./middlewares/requestLogger.js";
const app = express();
const PORT = process.env.PORT || 4000

connetDB(process.env.MONGO_URI);


// -------------- Route Callbacks --------------
import { getUsers, getUser, createNewUser, updateUserDetails, deleteUser } from "./routes/userRoutes.js";


// -------------- middlare to validate required fields. --------------
import validateFields from "./middlewares/validateFields.js";

// ------- Middleware -------
app.use(express.json()) // parsing the data 
app.use(requestLogger) // loging request details

app.get("/users", getUsers); // Getting all users

app.get("/users/:id", getUser); // Getting single user

app.post("/user", validateFields, createNewUser) // Creating new user

app.put("/user/:id", validateFields, updateUserDetails) // Update details of an existing user.

app.delete("/user/:id", deleteUser); // Deleting user 


app.listen(PORT, () => {
    console.log("Server is running...")
}) 