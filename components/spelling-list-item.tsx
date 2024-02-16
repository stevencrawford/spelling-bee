import Link from 'next/link';
import { Spelling } from '@prisma/client';
import { formatDate } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { wordsSchema } from '@/lib/validation';
import { SpellingListOperations } from '@/components/spelling-list-operations';

interface SpellingListItemProps {
  spelling: Pick<
    Spelling,
    'id' | 'name' | 'content' | 'published' | 'createdAt'
  >;
}

export function SpellingListItem({ spelling }: SpellingListItemProps) {
  const validatedSpellingContent = wordsSchema.parse(
    JSON.parse(spelling.content as string),
  );

  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/spelling/${spelling.id}`}
          className="font-semibold hover:underline"
        >
          {spelling.name}
        </Link>
        <div className="flex-wrap space-x-1">
          {validatedSpellingContent.map(({ order, text }) => (
            <Badge key={order} variant="outline">
              {text}
            </Badge>
          ))}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(spelling.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      <SpellingListOperations spelling={{ id: spelling.id }} />
    </div>
  );
}

SpellingListItem.Skeleton = function SpellingListItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};
