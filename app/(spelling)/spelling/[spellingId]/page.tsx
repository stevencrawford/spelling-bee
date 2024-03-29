import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { db } from '@/lib/db';
import { Spelling } from '@prisma/client';
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
import PracticeToggle from '@/components/practice-toggle';

const frenchCursiveFont = localFont({
  src: '../../../../assets/fonts/Parisienne-Regular.ttf',
});

interface SpellingPageProps {
  params: { spellingId: string };
}

async function getSpellingForId(spellingId: Spelling['id']) {
  return db.spelling.findFirst({
    where: {
      id: spellingId,
    },
  });
}

export default async function SpellingPage({ params }: SpellingPageProps) {
  const spelling = await getSpellingForId(params.spellingId);

  if (!spelling) {
    notFound();
  }

  const validatedSpellingContent = wordsSchema.parse(
    JSON.parse(spelling.content as string),
  );

  return (
    <>
      <div className="grid grid-cols-2">
        <Link
          href="/spelling"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'justify-self-start',
          )}
        >
          <>
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            Back
          </>
        </Link>
        <PracticeToggle className="justify-self-end bg-blue-500 rounded-full transition-colors hover:bg-blue-400" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-0">#</TableHead>
            <TableHead className="w-[400px]">Word</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {validatedSpellingContent.map(
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
                    <Icons.translate className="h-4 w-4" />
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
