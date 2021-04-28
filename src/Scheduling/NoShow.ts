import type { CodeSetDescriptionWithValue, Meta, Patient } from '../common';

import type { SchedulingVisit } from './SchedulingVisit';

export interface NoShowMeta extends Meta {
  DataModel: 'Scheduling';
  EventType: 'NoShow';
}

export interface NoShowVisit extends SchedulingVisit {
  NoShowReason?: string | null;
}

export interface NoShow {
  Meta: NoShowMeta;
  AppointmentInfo?: CodeSetDescriptionWithValue[];
  Patient?: Patient;
  Visit: NoShowVisit;
}
