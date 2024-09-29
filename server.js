import express from "express";
import "dotenv/config"; // Loads .env automatically
import { connetDB } from "./config/db.js"

// -------------- Middlerware to log the request details on every request. --------------
import requestLogger from "./middlewares/requestLogger.js";
const app = express();
const PORT = process.env.PORT || 4000

connetDB(process.env.MONGO_URI); // Making an connetion to the DB.

// -------------- Route Callbacks --------------
import { getUsers, getUser, createNewUser, updateUserDetails, deleteUser } from "./routes/userRoutes.js";

// -------------- middleware to validate required fields. --------------
import validateFields from "./middlewares/validateFields.js";

// -------------- middleware to limit the number of API request. --------------
import apiLimiter from "./middlewares/apiLimiter.js";

// ------- Middleware -------
app.use(express.json()) // parsing the data 
app.use(requestLogger) // loging request details

app.get("/users", getUsers); // Getting all users

app.get("/users/:id", getUser); // Getting single user

app.post("/user", apiLimiter, validateFields, createNewUser) // Creating new user

app.put("/user/:id", apiLimiter, validateFields, updateUserDetails) // Update details of an existing user.

app.delete("/user/:id", apiLimiter, deleteUser); // Deleting user 


app.listen(PORT, () => {
    console.log("Server is running...")
}) 