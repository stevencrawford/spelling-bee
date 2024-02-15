'use client';

import * as React from 'react';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Button, ButtonProps, buttonVariants } from '@/components/ui/button';
import { practiceAtom } from '@/lib/atoms';
import { useAtom } from 'jotai';

interface PracticeToggleButton extends ButtonProps {}

export default function PracticeToggle({ className }: PracticeToggleButton) {
  const [isPracticing, setIsPracticing] = useAtom(practiceAtom);

  return (
    <Button
      className={cn(buttonVariants({ variant: 'default' }), className)}
      onClick={() => {
        setIsPracticing(!isPracticing);
      }}
    >
      {isPracticing ? (
        <Icons.eyeOn className="h-6 w-6" />
      ) : (
        <Icons.eyeOff className="h-6 w-6" />
      )}
    </Button>
  );
}
