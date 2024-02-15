import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { db } from '@/lib/db';
import { Dictee } from '@prisma/client';
import { notFound } from 'next/navigation';
import { wordsSchema } from '@/lib/validation';
import * as React from 'react';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import localFont from 'next/font/local';
import GenderBadge from '@/components/gender-badge';
import SpokenWord from '@/components/spoken-word';
import VerbGroup from '@/components/verb-group';

const frenchCursiveFont = localFont({
  src: '../../../../assets/fonts/Parisienne-Regular.ttf',
});

interface DicteePageProps {
  params: { dicteeId: string };
}

async function getDicteeForId(dicteeId: Dictee['id']) {
  return db.dictee.findFirst({
    where: {
      id: dicteeId,
    },
  });
}

export default async function Page({ params }: DicteePageProps) {
  const dictee = await getDicteeForId(params.dicteeId);

  if (!dictee) {
    notFound();
  }

  const validatedDicteeContent = wordsSchema.parse(
    JSON.parse(dictee.content as string),
  );

  return (
    <>
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
        <h2 className="font-semibold">{dictee.name}</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-0">#</TableHead>
            <TableHead className="w-[400px]">Word</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {validatedDicteeContent.map(
            ({ order, text, verb_group, masculine }) => (
              <TableRow key={order}>
                <TableCell>{order}</TableCell>
                <TableCell className="flex items-center gap-2 font-medium">
                  <SpokenWord
                    className={`${frenchCursiveFont.className} text-4xl`}
                    word={text}
                  />
                  <GenderBadge text={text} masculine={masculine ?? text} />
                  <VerbGroup group={verb_group ?? 0} />
                  <Link
                    className={buttonVariants({ variant: 'outline' })}
                    href={`https://translate.google.com/?sl=fr&tl=en&text=${text}%0A&op=translate`}
                    target="_blank"
                  >
                    <Icons.translate className="h-6 w-6" />
                  </Link>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </>
  );
}
