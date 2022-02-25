import dbPremise from './mongo.js';

export const handler = ({ action, guard = true, db = false }) => {
	/** @type {import('@sveltejs/kit').RequestHandler} */
	async function endpoint({ request, url, locals }) {
		if (guard && !locals.auth) return { status: 401 };

		const body = await request.json().catch(() => ({}));
		const params = Object.fromEntries(url.searchParams);

		const connection = db && (await dbPremise);
		const collection = db && connection.db().collection(db);

		return {
			status: 200,
			body: await action({ db: collection, body, params })
		};
	}

	return endpoint;
};

export const partial =
	({ guard: p_guard, db: p_db }) =>
	({ action, guard = true, db = false }) =>
		handler({
			action,
			guard: p_guard ?? guard,
			db: p_db ?? db
		});
