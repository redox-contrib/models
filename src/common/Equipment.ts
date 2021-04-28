import type { CodeSetDescription } from './CodeSetDescription';

export interface Equipment extends CodeSetDescription {
  Duration?: number | null;
  StartDateTime?: string | null;
}
