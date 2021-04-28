import type { Identifier } from './Identifier';

export interface InsurancePlan extends Identifier {
  Name?: string | null;
  Type?: string | null;
}
