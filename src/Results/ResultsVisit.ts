import type { Visit } from '../common';

export type ResultsVisit = Pick<Visit, 'AccountNumber' | 'AttendingProvider' | 'Location' | 'PatientClass' | 'ReferringProvider' | 'VisitDateTime' | 'VisitNumber'>;
