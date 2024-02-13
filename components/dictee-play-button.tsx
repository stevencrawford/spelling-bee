'use client';

import * as React from 'react';
import { ButtonProps, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

interface DicteePlayButtonProps extends ButtonProps {
  word: string;
}

export function DicteePlayButton({
  className,
  variant,
  word,
  ...props
}: DicteePlayButtonProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  function onClick(word: string) {
    setIsLoading(true);

    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(word);
    synth.getVoices().map((voice) => {
      if (voice.name === 'Daniel (French (France))') {
        utterThis.voice = voice;
      }
    });
    if (utterThis.voice) {
      synth.speak(utterThis);
    }

    setIsLoading(false);
  }

  return (
    <button
      onClick={() => onClick(word)}
      className={cn(
        buttonVariants({ variant }),
        {
          'cursor-not-allowed opacity-60': isLoading,
        },
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="h-4 w-4 animate-spin" />
      ) : (
        <Icons.play className="h-4 w-4" />
      )}
    </button>
  );
}
