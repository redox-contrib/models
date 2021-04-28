import type { Visit } from '../common';

export type NotesVisit = Pick<Visit, 'AccountNumber' | 'Location' | 'VisitDateTime' | 'VisitNumber'>;
