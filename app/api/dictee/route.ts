import * as z from 'zod';

import { db } from '@/lib/db';
import { Prisma } from '@prisma/client';

const dicteeCreateSchema = z.object({
  name: z.string(),
  content: z.string(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const body = dicteeCreateSchema.parse(json);

    const words: Prisma.JsonArray = [];
    body.content
      .trim()
      .split(' ')
      .map((word, index) => {
        words.push({
          order: index++,
          text: word,
        });
      });

    const author = await db.user.findFirstOrThrow({
      where: { email: 'steven@example.com' },
    });

    const dictee = await db.dictee.create({
      data: {
        name: body.name,
        content: JSON.stringify(words),
        published: false,
        authorId: author.id,
      },
      select: {
        id: true,
      },
    });

    return new Response(JSON.stringify(dictee));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}
