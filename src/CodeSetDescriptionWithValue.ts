import type { CodeSetDescription } from './CodeSetDescription';

export interface CodeSetDescriptionWithValue extends CodeSetDescription {
  Value?: string | null;
}
