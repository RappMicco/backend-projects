import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import emailRoute from "./route/emailRoute.js";


dotEnv.config();

const PORT = process.env.PORT || 4553;
const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(express.json());

app.use("/api", emailRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});