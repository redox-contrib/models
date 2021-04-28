import type { CodeSetDescriptionWithValue, Meta, Patient } from '..';

import type { SchedulingVisit } from './SchedulingVisit';

export interface ModificationMeta extends Meta {
  DataModel: 'Scheduling';
  EventType: 'Modification';
}

export interface Modification {
  Meta: ModificationMeta;
  AppointmentInfo?: CodeSetDescriptionWithValue[];
  Patient?: Patient;
  Visit: SchedulingVisit;
}
