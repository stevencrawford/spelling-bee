'use client';

import { Textarea } from '@/components/ui/textarea';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { buttonVariants } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icons } from '@/components/icons';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { dicteeCreateSchema } from '@/lib/validation';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { revalidatePath } from 'next/cache';

type FormData = z.infer<typeof dicteeCreateSchema>;

export default function DicteeCreateForm() {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(dicteeCreateSchema),
  });
  const router = useRouter();
  const [isSaving, setIsSaving] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsSaving(true);

    const response = await fetch('/api/dictee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        content: data.content,
      }),
    });

    setIsSaving(false);

    if (!response?.ok) {
      return toast({
        title: 'Something went wrong.',
        description: 'Your dictée was not saved. Please try again.',
        variant: 'destructive',
      });
    }

    const dictee = await response.json();

    // This forces a cache invalidation.
    router.refresh();
    router.push(`/dictee/${dictee.id}`);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4">
        <Input
          id="name"
          type="text"
          placeholder="Enter dictée name"
          {...register('name')}
        />
        <Textarea
          className="min-h-[200px]"
          id="content"
          placeholder="Type your dictée here..."
          {...register('content')}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            {isSaving && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Save</span>
          </button>
        </div>
      </div>
    </form>
  );
}
