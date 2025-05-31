import { ThemeApiResponse } from '@/app';
import { http } from '@/lib/utils';
import { AxiosResponse } from 'axios';

export function getThemes(): Promise<AxiosResponse<ThemeApiResponse>> {
	return http({ url: '/themes', method: 'get' });
}

export function getThemeById(id: string): Promise<any> {
	return http({ url: '/themes/' + id, method: 'get' });
}
