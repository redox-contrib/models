import type { CodeSetDescriptionWithValue, Meta, Patient } from '..';

import type { SchedulingVisit } from './SchedulingVisit';

export interface RescheduleMeta extends Meta {
  DataModel: 'Scheduling';
  EventType: 'Reschedule';
}

export interface RescheduleVisit extends SchedulingVisit {
  OldDateTime?: string | null;
  OldVisitNumber?: string | null;
}

export interface Reschedule {
  Meta: RescheduleMeta;
  AppointmentInfo?: CodeSetDescriptionWithValue[];
  Patient?: Patient;
  Visit: RescheduleVisit;
}
