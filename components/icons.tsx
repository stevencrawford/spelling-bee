import {
  AlertTriangle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Languages,
  Loader2,
  MoreVertical,
  Plus,
  Trash,
  User,
  X,
  type Icon as LucideIcon,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  add: Plus,
  close: X,
  ellipsis: MoreVertical,
  eyeOn: Eye,
  eyeOff: EyeOff,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  user: User,
  arrowRight: ArrowRight,
  translate: Languages,
  warning: AlertTriangle,
};
