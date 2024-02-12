import * as React from 'react';

import { cn } from '@/lib/utils';

interface DicteeShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DicteeShell({
  children,
  className,
  ...props
}: DicteeShellProps) {
  return (
    <div className={cn('grid items-start gap-8', className)} {...props}>
      {children}
    </div>
  );
}
