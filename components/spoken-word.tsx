'use client';

import * as React from 'react';
import { ButtonProps } from '@/components/ui/button';

interface SpokenWordProps extends ButtonProps {
  word: string;
}

export default function SpokenWord({ className, word }: SpokenWordProps) {
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
      {word}
    </span>
  );
}
