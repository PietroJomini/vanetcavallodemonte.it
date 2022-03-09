import { handler } from '$lib/api/method.js';
import { promises } from 'fs';

export const get = handler({
	action: async () => {
		const file = await promises.readFile('static/images/map.json');
		return file.toString();
	}
});

export const patch = handler({
	action: ({ body }) =>
		promises.writeFile('static/images/map.json', JSON.stringify({ carousel: body.order }))
});
