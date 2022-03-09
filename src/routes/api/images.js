import { handler } from '$lib/api/method.js';
import { exists } from '$lib/utils/fs';
import { promises } from 'fs';

export const get = handler({
	action: async () => {
		const file = await promises.readFile('static/images/map.json');
		return file.toString();
	}
});

export const post = handler({
	action: async ({ body }) => {
		const blob = await (await fetch(body.source)).blob();
		const buffer = await blob.arrayBuffer();

		let index = 1;
		let name = body.name;
		const pieces = body.name.split('.');
		while (await exists(`static/images/carousel/${name}`)) {
			name = `${pieces.slice(0, -1)}-${index}.${pieces[pieces.length - 1]}`;
			index += 1;
			console.log(name);
		}

		await promises.writeFile(`static/images/carousel/${name}`, new Uint8Array(buffer));
		const map = JSON.parse((await promises.readFile('static/images/map.json')).toString());
		await promises.writeFile(
			'static/images/map.json',
			JSON.stringify({ carousel: [...map.carousel, name] })
		);
	}
});

export const patch = handler({
	action: ({ body }) =>
		promises.writeFile('static/images/map.json', JSON.stringify({ carousel: body.order }))
});
