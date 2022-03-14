import adapter from '@sveltejs/adapter-node';
import { defineConfig } from 'vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: defineConfig({ server: { fs: { deny: ['keys.json'] } } })
	}
};

export default config;
