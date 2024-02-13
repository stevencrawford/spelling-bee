import * as z from 'zod';
import { db } from '@/lib/db';

const routeContextSchema = z.object({
  params: z.object({
    dicteeId: z.string(),
  }),
});

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>,
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context);

    // Delete the dictée.
    await db.dictee.delete({
      where: {
        id: params.dicteeId as string,
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}
