import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

interface SpellingListLayoutProps {
  children?: React.ReactNode;
}

export default function SpellingListLayout({
  children,
}: SpellingListLayoutProps) {
  return (
    <div className="container grid items-start gap-10 py-8">
      <main className="flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
      <div className="fixed bottom-5 right-5 grid w-full justify-items-end">
        <Link
          href="/spelling/new"
          className={cn(buttonVariants({ variant: 'default' }), 'rounded-full')}
        >
          <Icons.add className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
