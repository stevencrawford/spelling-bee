'use client';

import * as React from 'react';
import { ButtonProps } from '@/components/ui/button';
import { useAtom } from 'jotai/index';
import { practiceAtom } from '@/lib/atoms';

interface SpokenWordProps extends ButtonProps {
  word: string;
}

export default function SpokenWord({ className, word }: SpokenWordProps) {
  const [isPracticing] = useAtom(practiceAtom);

  function onClick(word: string) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(word);

    synth.getVoices().map((voice) => {
      if (voice.name === 'Daniel (French (France))') {
        utterThis.voice = voice;
      }
    });
    utterThis.rate = 0.5;
    if (utterThis.voice) {
      synth.speak(utterThis);
    }
  }

  return (
    <span
      onClick={() => {
        onClick(word);
      }}
      className={`${className} hover:cursor-pointer`}
    >
      {!isPracticing ? word : [...Array(word.length)].map(() => '*')}
    </span>
  );
}
