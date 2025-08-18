import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import OpenAI from "openai";
import { env } from "~/env.js";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export const ttsRouter = createTRPCRouter({
  generateSpeech: publicProcedure
    .input(
      z.object({
        text: z.string().min(1, 'text is required'),
        voice: z.enum(["alloy", "echo", "fable", "onyx", "nova", "shimmer"]).default("nova"),
        language: z.enum(["en", "no"]).default("en"),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const response = await openai.audio.speech.create({
          model: "gpt-4o-mini-tts",
          voice: input.voice,
          input: input.text,
          response_format: "mp3",
        });

        const buffer = Buffer.from(await response.arrayBuffer());
        const base64 = buffer.toString("base64");
        
        return {
          audio: base64,
          format: "mp3",
        };
      } catch (error) {
        // Provide more helpful error information in development
        const message = error instanceof Error ? error.message : "Unknown error";
        console.error("TTS Error:", message);
        throw new Error(`Failed to generate speech: ${message}`);
      }
    }),
});
