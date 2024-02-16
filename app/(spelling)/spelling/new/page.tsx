import * as React from 'react';
import SpellingCreateForm from '@/components/spelling-create-form';

export default function NewSpellingPage() {
  return (
    <div className="m-2 flex flex-col space-y-4">
      <SpellingCreateForm />
    </div>
  );
}
