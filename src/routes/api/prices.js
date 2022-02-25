import { partial } from '$lib/api/method.js';
import { ObjectId } from 'mongodb';

const handler = partial({ db: 'prices' });

/*
{
    name: String,
	price: Number
}
*/

export const get = handler({
	guard: false,
	action: async ({ db, params: { id } }) => ({
		prices: await (await db.find(id ? { _id: ObjectId(id) } : {})).toArray()
	})
});

export const post = handler({
	action: async ({ db, body: { name, price } }) => ({
		price: await db.insertOne({ name, price })
	})
});

export const patch = handler({
	action: async ({ db, body: { id, price } }) =>
		await db.updateOne({ _id: ObjectId(id) }, { $set: { price } })
});
