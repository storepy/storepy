import { StaffModel, StaffService } from '@miq/staffjs';
import { TPartner } from './types';

class PartnerService extends StaffService<TPartner> {
  //   deleteSlugs(slugs: string[]) {
  //     return this.post(`${this._endpoint}batch/`, { slugs, action: 'destroy' });
  //   }
  //   getSummary() {
  //     return this.get(`${this._endpoint}summary/`);
  //   }
}

export const Partner = (data: TPartner = {}) => {
  return StaffModel<TPartner, PartnerService>(data, 'partners', PartnerService);
};

export type TPartnerInstance = ReturnType<typeof Partner>;
