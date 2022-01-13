import { StaffService } from '@miq/utils';

class SupplierOrderStaffService extends StaffService {
  getSheinProductData(orderSlug, values) {
    return this.postPath(`${this.path}${orderSlug}/shein/`, values, { timeout: 10000 });
  }
}

export const supOrderServices = new SupplierOrderStaffService('orders/');
