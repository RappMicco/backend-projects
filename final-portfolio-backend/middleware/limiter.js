import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 10 * 30 * 1000, //3 minutes
    max: 3,
    message: {
        success: false,
        message: "You reached the limit (3 requests). Please try again later!"
    }
});