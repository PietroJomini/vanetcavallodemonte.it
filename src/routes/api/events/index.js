import { partial } from '$lib/api/method.js';
import { ObjectId } from 'mongodb';

const handler = partial({ db: 'event' });

/*
{
    title: String,
	descriprion: String,
	start: Date,
	end: Date,
	link: String
}
*/

export const get = handler({
	guard: false,
	action: async ({ db, params: { id } }) => ({
		events: await (await db.find(id ? { _id: ObjectId(id) } : {})).toArray()
	})
});

export const post = handler({
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
	action: async ({ db, body: { id, event } }) =>
		await db.updateOne(
			{ _id: ObjectId(id) },
			{ $set: { ...event, start: new Date(event.start), end: event.end && new Date(event.end) } }
		)
});

export const del = handler({
	action: async ({ db, body: { id } }) => await db.deleteOne({ _id: ObjectId(id) })
});
