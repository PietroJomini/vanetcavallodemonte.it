import { handler } from '$lib/api/method.js';
import { promises } from 'fs';

export const get = handler({
	action: async () => {
		const file = await promises.readFile('static/images/map.json');
		return file.toString();
	}
});
