import type { CodeSetDescriptionWithValue } from './CodeSetDescriptionWithValue';

export interface ClinicalInfo extends CodeSetDescriptionWithValue {
  Abbreviation?: string | null;
  Notes?: string[];
  Units?: string | null;
}
