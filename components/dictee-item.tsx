import Link from 'next/link';
import { Dictee } from '@prisma/client';
import { formatDate } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { wordsSchema } from '@/lib/validation';

interface DicteeItemProps {
  dictee: Pick<Dictee, 'id' | 'name' | 'content' | 'published' | 'createdAt'>;
}

export function DicteeItem({ dictee }: DicteeItemProps) {
  const validatedDicteeContent = wordsSchema.parse(
    JSON.parse(dictee.content as string),
  );

  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/dictee/${dictee.id}`}
          className="font-semibold hover:underline"
        >
          {dictee.name}
        </Link>
        <div className="flex-wrap space-x-1">
          {validatedDicteeContent.map(({ order, text }) => (
            <Badge key={order} variant="outline">
              {text}
            </Badge>
          ))}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(dictee.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      {/*<DicteeOperations post={{ id: post.id, title: post.title }} />*/}
    </div>
  );
}

DicteeItem.Skeleton = function DicteeItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};
