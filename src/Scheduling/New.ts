import type { CodeSetDescriptionWithValue, Meta, Patient } from '..';

import type { SchedulingVisit } from './SchedulingVisit';

export interface NewMeta extends Meta {
  DataModel: 'Scheduling';
  EventType: 'New';
}

export interface New {
  Meta: NewMeta;
  AppointmentInfo?: CodeSetDescriptionWithValue[];
  Patient?: Patient;
  Visit: SchedulingVisit;
}
