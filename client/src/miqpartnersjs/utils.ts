import { HTTP } from '@miq/utiljs';
import { useRequest } from '@miq/hookjs';

import { Partner } from './models';
import { TPartner } from './types';
import { useSearchParams } from 'react-router-dom';

export const usePartnerListRequest = () => {
  const [params] = useSearchParams();

  // const is_ = params.get('is_');
  const is_newbie = params.get('is_newbie');
  const wears_lingerie = params.get('wears_lingerie');

  return useRequest<TPartner>(() => Partner().list({ params }), { refreshDeps: [wears_lingerie, is_newbie] });
};

export const createPartner = (values: TPartner) => HTTP.post<TPartner>('api/partners/', values);
