import express from "express";
import { sendEmail } from "../config/mailService.js";
import { limiter } from "../middleware/limiter.js";
import { contactSecurity } from "../middleware/helmet.js";

const router = express.Router();

router.post("/contact", contactSecurity, limiter, sendEmail);

export default router;