
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the Google GenAI client directly using the environment variable as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createChatSession = (): Chat => {
  // Use gemini-3-flash-preview for general text-based chat tasks as per requirements
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are 'GardenBot', a friendly and knowledgeable virtual assistant for Hughes Landscaping, a one-man gardening business in Western Australia. 
      
      Your goal is to help potential clients by answering gardening questions, offering seasonal advice for Western Australia (Mediterranean climate), and providing rough estimates for services.

      Services offered: Mowing, whipper snipping, general cleanups, green waste removal, gutter cleaning, pressure washing, weeding, pruning.
      
      Business details:
      - Owner: One-man team (Mr. Hughes).
      - Location: Western Australia (Perth and surrounds).
      - Traits: Reliable, clean, modern, professional, affordable.
      
      Guidelines:
      - Be polite, concise, and helpful.
      - If asked for a specific price quote, give a *very rough* range (e.g., "Lawn mowing typically starts around $50 depending on size") but ALWAYS emphasize they need to contact us for an exact free quote.
      - Use Australian English spelling (e.g., 'colour', 'fertiliser').
      - If you don't know an answer, suggest they use the contact form to ask Mr. Hughes directly.`,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    // sendMessage returns a GenerateContentResponse
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    // Use the .text property to access the generated text directly (not a method call)
    return response.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the gardening database right now. Please try again later.";
  }
};
