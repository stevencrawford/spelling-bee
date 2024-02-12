import { DicteeHeader } from '@/components/dictee-header';
import { DicteeCreateButton } from '@/components/dictee-create-button';
import { DicteeShell } from '@/components/dictee-shell';

interface DicteeLayoutProps {
  children?: React.ReactNode;
}

export default function DicteeLayout({ children }: DicteeLayoutProps) {
  return (
    <div className="container mx-auto grid items-start gap-10 py-8">
      <DicteeShell>
        <DicteeHeader heading="Dictée" text="Create and manage dictées.">
          <DicteeCreateButton />
        </DicteeHeader>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </DicteeShell>
    </div>
  );
}
