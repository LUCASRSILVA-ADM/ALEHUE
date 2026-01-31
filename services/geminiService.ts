
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export class AlehueConcierge {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY });
  }

  async getChatResponse(userMessage: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `
            Você é a "Alma da Alehue", o guia espiritual e concierge das Cabañas Alehue em Bariloche.
            Personalidade: Sábio, acolhedor, apaixonado pela Patagônia.
            Tom: Contemplativo e sofisticado.
          `,
          temperature: 0.8,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Sinta o calor da lareira... tive um breve silêncio na conexão.";
    }
  }

  async generateMarketingImage(prompt: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: `A professional, high-end architectural photography of a luxury lodge in Bariloche, Patagonia. 
                     Subject: ${prompt}. 
                     Style: Warm ambient lighting, dark wood textures, large windows with views of Lake Nahuel Huapi, 
                     sacred atmosphere, high resolution, 8k, cinematic, minimal and elegant.`
            }
          ]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9"
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      return null;
    } catch (error) {
      console.error("Image Generation Error:", error);
      throw error;
    }
  }
}

export const concierge = new AlehueConcierge();
