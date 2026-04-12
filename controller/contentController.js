import { GoogleGenAI } from "@google/genai";

const createContent = async (req, res) => {
    try {
        const { content } = req.body;
        if (!content) {
            return res.status(400).json({ error: "Content is required" });
        }
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: content,
        });
        console.log("Generated content:", response.text);
        res.status(200).json({ generateContent: response.text });
    }
    catch (error) {
        console.error("Error generating content:", error);
        res.status(500).json({ error: error.message });
    }
}

export default createContent;