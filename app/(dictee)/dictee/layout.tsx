import { DicteeShell } from '@/components/dictee-shell';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

interface DicteeLayoutProps {
  children?: React.ReactNode;
}

export default function DicteeLayout({ children }: DicteeLayoutProps) {
  return (
    <div className="container grid gap-10 py-8">
      <DicteeShell>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
        <div className="fixed bottom-5 right-5 grid w-full justify-items-end">
          <Link
            href="/dictee/new"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'rounded-full',
            )}
          >
            <Icons.add className="h-6 w-6" />
          </Link>
        </div>
      </DicteeShell>
    </div>
  );
}
