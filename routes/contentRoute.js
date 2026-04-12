import express from "express";
import contentController from "../controller/contentController.js";

const router = express.Router();

router.post("/generate", contentController);

export default router;