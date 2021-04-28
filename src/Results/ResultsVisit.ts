import type { Visit } from '..';

export type ResultsVisit = Pick<Visit, 'AccountNumber' | 'AttendingProvider' | 'Location' | 'PatientClass' | 'ReferringProvider' | 'VisitDateTime' | 'VisitNumber'>;
