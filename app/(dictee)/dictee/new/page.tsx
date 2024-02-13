import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import * as React from 'react';
import DicteeCreateForm from '@/components/dictee-create-form';

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col space-y-4 p-4">
      <div className="flex items-center space-x-10">
        <Link
          href="/dictee"
          className={cn(buttonVariants({ variant: 'ghost' }))}
        >
          <>
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            Back
          </>
        </Link>
      </div>
      <DicteeCreateForm />
    </div>
  );
}
