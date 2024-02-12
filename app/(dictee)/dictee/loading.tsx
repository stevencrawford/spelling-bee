import { DicteeItem } from '@/components/dictee-item';

export default function DicteeLoading() {
  return (
    <div className="divide-border-200 divide-y rounded-md border">
      <DicteeItem.Skeleton />
      <DicteeItem.Skeleton />
      <DicteeItem.Skeleton />
      <DicteeItem.Skeleton />
      <DicteeItem.Skeleton />
    </div>
  );
}
