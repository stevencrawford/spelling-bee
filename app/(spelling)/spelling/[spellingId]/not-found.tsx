import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { EmptyPlaceholder } from '@/components/empty-placeholder';

export default function NotFound() {
  return (
    <EmptyPlaceholder className="mx-auto max-w-[800px]">
      <EmptyPlaceholder.Icon name="warning" />
      <EmptyPlaceholder.Title>Uh oh! Not Found</EmptyPlaceholder.Title>
      <EmptyPlaceholder.Description>
        This spelling list could not be found. Please try again.
      </EmptyPlaceholder.Description>
      <Link href="/spelling" className={buttonVariants({ variant: 'ghost' })}>
        Go back to Spelling Lists
      </Link>
    </EmptyPlaceholder>
  );
}
