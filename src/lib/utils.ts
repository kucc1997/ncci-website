import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios';
import Cookies from 'js-cookie';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const http = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

http.interceptors.request.use(
	(config) => {
		const token = Cookies.get('accessToken');
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
