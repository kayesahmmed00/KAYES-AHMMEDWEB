import { GoogleGenAI } from "@google/genai";

/**
 * AI Client Initialization
 * Strictly uses process.env.API_KEY as per the guidelines.
 */
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface SearchResponse {
  text: string;
  sources?: { uri: string; title: string }[];
}

export async function queryCheats(query: string): Promise<SearchResponse> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Research task: ${query}. Focus on gaming cheats and Kayes Ahmmed platform.`,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "You are a professional gaming assistant for the Kayes Ahmmed platform.",
      },
    });

    const text = response.text || "No data found.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    const sources = chunks?.map((chunk: any) => ({
      uri: chunk.web?.uri || chunk.maps?.uri,
      title: chunk.web?.title || chunk.maps?.title || "Source"
    })).filter((s: any) => s.uri);

    return { text, sources };
  } catch (error) {
    console.error("Search Error:", error);
    return { text: "AI Search failed. Check if API Key is configured in Netlify." };
  }
}

export async function chatWithAI(message: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        thinkingConfig: { thinkingBudget: 16000 },
        systemInstruction: 'You are Kayes Pro AI. Provide deep reasoning for gaming technicalities.',
      },
      history: history
    });

    const response = await chat.sendMessage({ message });
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "AI Chat failed. Please verify your environment configuration.";
  }
}
