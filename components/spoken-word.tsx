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

  function speakWord(word: string) {
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
        speakWord(word);
      }}
      className={`${className} text-4xl hover:cursor-pointer`}
    >
      {!isPracticing
        ? word
        : [...Array(word.length)].map((value) => {
            return <sub key={value}>{'*'}</sub>;
          })}
    </span>
  );
}
