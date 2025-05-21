import { http } from '@/lib/utils';
import { AxiosResponse } from 'axios';

export function getPapers(): Promise<AxiosResponse<any>> {
	return http({ url: '/papers', method: 'get' });
}
