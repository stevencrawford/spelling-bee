import * as z from 'zod';
import { db } from '@/lib/db';

const routeContextSchema = z.object({
  params: z.object({
    spellingId: z.string(),
  }),
});

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>,
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context);

    // Delete the spelling.
    await db.spelling.delete({
      where: {
        id: params.spellingId as string,
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
