const events = [];

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	return {
		status: 200,
		body: {
			events,
			hey: 'hey hey'
		}
	};
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const body = await request.json();

	events.push(body.event);

	return {
		status: 200,
		body: {
			events,
			hey: 'hey hey'
		}
	};
}
