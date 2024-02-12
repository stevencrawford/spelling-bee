import { DicteeItem } from '@/components/dictee-item';
import { db } from '@/lib/db';

export default async function DicteePage() {
  const dictees = await db.dictee.findMany({
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
      {dictees?.length ? (
        <div className="divide-y divide-border rounded-md border">
          {dictees.map((dictee) => (
            <DicteeItem key={dictee.id} dictee={dictee} />
          ))}
        </div>
      ) : (
        <div>You don&apos;t have any dictée yet. Start creating content.</div>
      )}
    </>
  );
}
