import { HTTP } from '@miq/utiljs';
import { TPartner } from './types';

export const createPartner = (values: TPartner) => HTTP.post<TPartner>('api/partners/', values);
