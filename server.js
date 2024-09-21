import express from "express";
import requestLogger from "./middlewares/requestLogger.js";
const app = express();
import { getUsers, getUser, createNewUser } from "./routes.js";
const PORT = 4000

app.use(requestLogger)

// ------------------- Getting all users  -------------------
app.get("/users", getUsers);

// ------------------- Getting single user -------------------
app.get("/users/:id", getUser);


// ------------------- Creating new user -------------------
app.post("/user", createNewUser)






app.listen(PORT, () => {
    console.log("Server is running...")
})