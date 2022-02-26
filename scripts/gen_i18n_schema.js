import path from 'path';
import { promises as fs } from 'fs';
import { schema } from '../src/lib/translations/locales.js';

const here = path.resolve('.');
const src = path.join(here, 'src', 'lib', 'translations', 'it');

(async () => {
	const files = await fs.readdir(src);
	const buffers = Promise.all(files.map(async (file) => await fs.readFile(path.join(src, file))));
	const bodies = (await buffers).map((buffer) => buffer.toString());
	const schemas = bodies.map((body) => JSON.parse(body.replace(/: ".*"/g, `: ""`)));

	await schema.update((body) => {
		schemas.forEach((s, i) => {
			const key = files[i].split('.')[0];
			body.pages.find((page) => page.key === key).body = s;
		});

		return body;
	});
})();
