import { admin } from '$lib/config/keys.json';
export * as session from './session.js';

export const auth = (password) => password === admin;

export const guard =
	({ onSuccess, onFailure }) =>
	async ({ session }) => {
		return session?.auth ? onSuccess() : onFailure();
	};

export const load = guard({
	onSuccess: () => ({}),
	onFailure: () => ({ status: 302, redirect: '/admin/login' })
});
