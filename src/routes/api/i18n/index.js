import { handler } from '$lib/api/method.js';
import { promises } from 'fs';
import path from 'path';

const map = {
	it: {
		Test: path.join(path.resolve('.'), 'src', 'lib', 'translations', 'it', 'test.json')
	}
};

export const get = handler({
	action: async ({ params: { page, locale } }) => {
		const content = await promises.readFile(map[locale][page]);
		return content.toString();
	}
});

export const patch = handler({
	action: async ({ params: { page, locale }, body }) => {
		await promises.writeFile(map[locale][page], JSON.stringify(body, null, 4));
	}
});
