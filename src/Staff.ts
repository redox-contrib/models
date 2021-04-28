import type { CodeSetDescription } from './CodeSetDescription';
import type { Provider } from './Provider';

export interface Staff extends Provider {
  Duration?: number | null;
  Role?: CodeSetDescription;
}
