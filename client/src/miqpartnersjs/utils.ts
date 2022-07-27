import { useRequest } from '@miq/hookjs';
import { HTTP } from '@miq/utiljs';
import { Partner } from './models';
import { TPartner } from './types';

export const usePartnerListRequest = () => {
  //   const [params] = useSearchParams();

  //   const summary = params.get('summary');

  return useRequest<TPartner>(() => Partner().list());
};
//   {refreshDeps: [summary],}

export const createPartner = (values: TPartner) => HTTP.post<TPartner>('api/partners/', values);
