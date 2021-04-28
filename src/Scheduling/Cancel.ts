import type { CodeSetDescriptionWithValue, Meta, Patient } from '../common';

import type { SchedulingVisit } from './SchedulingVisit';

export interface CancelMeta extends Meta {
  DataModel: 'Scheduling';
  EventType: 'Cancel';
}

export interface CancelVisit extends SchedulingVisit {
  CancelReason?: string | null;
}

export interface Cancel {
  Meta: CancelMeta;
  AppointmentInfo?: CodeSetDescriptionWithValue[];
  Patient?: Patient;
  Visit: CancelVisit;
}
