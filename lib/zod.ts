import { z } from 'zod';

export const translationSchema = z.object({
  text: z.string(),
  definition: z.string(),
});

export const wordSchema = z.object({
  order: z.number(),
  text: z.string(),
  masculine: z.string(),
  feminine: z.string(),
  verb_group: z.number(), // Assuming it's always a number
  definition: z.string(),
  translation: translationSchema,
});

export const wordsSchema = z.array(wordSchema);
