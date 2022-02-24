import dbPremise from './db.js';

export const handler = ({ action, schema, guard = true }) => {
	/** @type {import('@sveltejs/kit').RequestHandler} */
	async function endpoint({ request, url, locals }) {
		if (guard && !locals.auth) return { status: 401 };

		const connection = await dbPremise;
		const collection = connection.db().collection(schema);
		const body = await request.json().catch(() => ({}));
		const params = Object.fromEntries(url.searchParams);

		return {
			status: 200,
			body: await action({ db: collection, body, params })
		};
	}

	return endpoint;
};
