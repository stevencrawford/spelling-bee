import * as React from 'react';
import { Badge } from '@/components/ui/badge';

interface GenderBadgeProps {
  text: string;
  masculine: string;
  feminine?: string;
}

export default function GenderBadge({ text, masculine }: GenderBadgeProps) {
  return text == masculine ? (
    <Badge variant="outline" className="bg-blue-200 text-white">
      M
    </Badge>
  ) : (
    <Badge variant="outline" className="bg-pink-200 text-white">
      F
    </Badge>
  );
}
