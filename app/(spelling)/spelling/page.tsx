import { SpellingListItem } from '@/components/spelling-list-item';
import { db } from '@/lib/db';

export default async function SpellingListPage() {
  const spellings = await db.spelling.findMany({
    select: {
      id: true,
      name: true,
      content: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });

  return (
    <>
      {spellings?.length ? (
        <div className="divide-y divide-border rounded-md border">
          {spellings.map((item) => (
            <SpellingListItem key={item.id} spelling={item} />
          ))}
        </div>
      ) : (
        <div>
          You don&apos;t have any spelling lists yet. Start creating content.
        </div>
      )}
    </>
  );
}
