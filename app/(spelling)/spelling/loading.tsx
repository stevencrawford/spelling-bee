import { SpellingListItem } from '@/components/spelling-list-item';

export default function Loading() {
  return (
    <div className="divide-border-200 divide-y rounded-md border">
      <SpellingListItem.Skeleton />
      <SpellingListItem.Skeleton />
      <SpellingListItem.Skeleton />
      <SpellingListItem.Skeleton />
      <SpellingListItem.Skeleton />
    </div>
  );
}
