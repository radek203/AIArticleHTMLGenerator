import OpenAI from "openai";
import dotenv from "dotenv";

export class OpenAIHelper {

    constructor() {
        dotenv.config();

        this.client = new OpenAI({
            apiKey: process.env.API_KEY,
        });
    }

    async makeRequest(prompt) {
        const gptResponse = await this.client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are an assistant dedicated to generating articles with html tags." },
                {
                    role: "user",
                    content: prompt,
                },
            ]
        });

        return gptResponse.choices[0].message.content;
    }

}