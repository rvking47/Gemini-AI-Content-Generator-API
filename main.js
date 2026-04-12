import express from "express";
import dotenv from "dotenv";
import router from "./routes/contentRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/content", router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});