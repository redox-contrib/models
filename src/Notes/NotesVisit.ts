import type { Visit } from '..';

export type NotesVisit = Pick<Visit, 'AccountNumber' | 'Location' | 'VisitDateTime' | 'VisitNumber'>;
