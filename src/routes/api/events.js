import { handler } from '$lib/api/method.js';
import { ObjectId } from 'mongodb';

export const get = handler({
	schema: 'event',
	guard: false,
	action: async ({ db, params: { id } }) => ({
		events: await (await db.find(id ? { _id: ObjectId(id) } : {})).toArray()
	})
});

export const post = handler({
	schema: 'event',
	action: async ({ db, body: { title, description, start, end, link } }) => ({
		event: await db.insertOne({
			title,
			description,
			start: new Date(start),
			end: end && new Date(end),
			link
		})
	})
});

export const patch = handler({
	schema: 'event',
	action: async ({
		db,
		body: {
			id,
			event: { title, description, start, end, link }
		}
	}) =>
		await db.updateOne(
			{ _id: ObjectId(id) },
			{ $set: { title, description, start: new Date(start), end: end && new Date(end), link } }
		)
});

export const del = handler({
	schema: 'event',
	action: async ({ db, body: { id } }) => await db.deleteOne({ _id: ObjectId(id) })
});
