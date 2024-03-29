import * as z from 'zod';

export const spellingCreateSchema = z.object({
  name: z.string().min(3).max(24),
  content: z.string(),
});

export const translationSchema = z.object({
  text: z.string(),
  definition: z.string(),
});

export const wordSchema = z.object({
  order: z.number(),
  text: z.string(),
  masculine: z.string().optional(),
  feminine: z.string().optional(),
  verb_group: z.custom<0 | 1 | 2 | 3>().optional(), // Assuming it's always a number
  definition: z.string().optional(),
  translation: translationSchema.optional(),
});

export const wordsSchema = z.array(wordSchema);
