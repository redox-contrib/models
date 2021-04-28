import type { CodeSetName } from './CodeSetName';

export interface Allergy extends CodeSetName {
  Type?: CodeSetName;
  OnsetDateTime?: string | null;
  Reaction?: CodeSetName[];
  Severity?: CodeSetName;
  Status?: string | null;
}
