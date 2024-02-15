import * as React from 'react';

import { Badge } from '@/components/ui/badge';

interface VerbGroupProps {
  group: 0 | 1 | 2 | 3;
}

export default function VerbGroup({ group }: VerbGroupProps) {
  return group > 0 ? (
    <Badge className="p-2 outline">
      {group}
      <span className="flex font-light">
        <sup>{['st', 'nd', 'rd'][--group]}</sup>{' '}
        <span className="hidden md:block">groupe</span>
      </span>
    </Badge>
  ) : (
    <></>
  );
}
