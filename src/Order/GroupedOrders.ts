import type { Meta, Patient } from '../common';

import type { OrderOrder } from './OrderOrder';
import type { OrderVisit } from './OrderVisit';

export interface GroupedOrdersMeta extends Meta {
  DataModel: 'Order';
  EventType: 'GroupedOrders';
}

export interface GroupedOrders {
  Meta: GroupedOrdersMeta;
  Orders: OrderOrder[];
  Patient: Patient;
  Visit?: OrderVisit;
}
