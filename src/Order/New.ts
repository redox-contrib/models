import type { Meta, Patient } from '../common';

import type { OrderOrder } from './OrderOrder';
import type { OrderVisit } from './OrderVisit';

export interface NewMeta extends Meta {
  DataModel: 'Order';
  EventType: 'New';
}

export interface New {
  Meta: NewMeta;
  Order: OrderOrder;
  Patient: Patient;
  Visit?: OrderVisit;
}
