import { handler } from '$lib/api/method.js';
import { promises } from 'fs';

const options = './src/lib/config/config.json';

export const get = handler({
	action: async () => {
		const file = await promises.readFile(options);
		return file.toString();
	}
});

export const patch = handler({
	action: async ({ body: { key, value } }) => {
		const file = await promises.readFile(options);
		const body = JSON.parse(file.toString());

		body.find((option) => option.key === key).value = value;
		await promises.writeFile(options, JSON.stringify(body));
	}
});
