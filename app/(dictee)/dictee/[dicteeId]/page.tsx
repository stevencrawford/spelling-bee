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
import { Badge } from '@/components/ui/badge';
import * as React from 'react';
import { DicteePlayButton } from '@/components/dictee-play-button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';

interface DicteePageProps {
  params: { dicteeId: string };
}

async function getDicteeForId(dicteeId: Dictee['id']) {
  return await db.dictee.findFirst({
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
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-0">#</TableHead>
            <TableHead className="w-[400px]">Word</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {validatedDicteeContent.map(
            ({ order, text, verb_group, masculine, definition }) => (
              <TableRow key={order}>
                <TableCell>{order}</TableCell>
                <TableCell className="font-medium">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>{text}</TooltipTrigger>
                      <TooltipContent>
                        <p>{definition}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  {text == masculine ? (
                    <Badge
                      variant="outline"
                      className="ml-2 bg-blue-200 text-white"
                    >
                      m
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="ml-2 bg-pink-200 text-white"
                    >
                      f
                    </Badge>
                  )}
                  {verb_group && verb_group > 0 ? (
                    <Badge variant="outline" className="ml-2">
                      {verb_group}
                      <span className="align-super font-light">
                        {['st', 'nd', 'rd'][--verb_group]} groupe
                      </span>
                    </Badge>
                  ) : (
                    <></>
                  )}
                </TableCell>
                <TableCell className="float-right flex space-x-2">
                  <Button variant={'link'}>
                    <Icons.copy className="h-10 w-4" />
                  </Button>
                  <Link
                    href={`https://translate.google.com/?sl=fr&tl=en&text=${text}%0A&op=translate`}
                    target="_blank"
                  >
                    <Icons.translate className="inline-flex h-10 w-4" />
                  </Link>
                  <DicteePlayButton variant="link" word={text} />
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </>
  );
}
