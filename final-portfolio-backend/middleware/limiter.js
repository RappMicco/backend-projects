import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 10 * 30 * 1000, //3 minutes
    max: 5,
    message: {
        success: false,
        message: "You reached the limit (2 requests). Please try again later!"
    }
});