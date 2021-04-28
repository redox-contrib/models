import type { Demographics } from './Demographics';
import type { Identifier } from './Identifier';

export interface Patient {
  Identifiers: Identifier[];
  Demographics: Demographics;
  Notes?: string[];
}
