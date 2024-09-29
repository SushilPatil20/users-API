import rateLimit from "express-rate-limit";

// Advance middleware for Liming the number of requests.
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minuts for allowence
    max: 50, // Limit each IP to 50 request per windowMs
    message: "To many requests from this IP, Please try again after 15 minutes."
})

export default apiLimiter;