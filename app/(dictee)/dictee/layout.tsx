import { DicteeHeader } from '@/components/dictee-header';
import { DicteeShell } from '@/components/dictee-shell';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Icons } from '@/components/icons';

interface DicteeLayoutProps {
  children?: React.ReactNode;
}

export default function DicteeLayout({ children }: DicteeLayoutProps) {
  return (
    <div className="container mx-auto grid items-start gap-10 py-8">
      <DicteeShell>
        <DicteeHeader heading="Dictée" text="Create and manage dictées.">
          <Link
            href="/dictee/new"
            className={buttonVariants({ variant: 'default' })}
          >
            <Icons.add className="mr-2 h-4 w-4" />
            New
          </Link>
        </DicteeHeader>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </DicteeShell>
    </div>
  );
}
