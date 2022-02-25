import { partial } from '$lib/api/method.js';
import { ObjectId } from 'mongodb';
import dbPremise from '$lib/api/mongo.js';

const handler = partial({ db: 'tags' });

/*
{
    name: String,
	accent: String,
    protected: Boolean
}
*/

export const get = handler({
	guard: false,
	action: async ({ db, params: { id } }) => ({
		tags: await (await db.find(id ? { _id: ObjectId(id) } : {})).toArray()
	})
});

export const post = handler({
	action: async ({ db, body: { name, accent } }) => ({
		event: await db.insertOne({ name, accent, protected: false })
	})
});

export const patch = handler({
	action: async ({ db, body: { id, name, accent } }) =>
		await db.updateOne({ _id: ObjectId(id) }, { $set: { name, accent } })
});

export const del = handler({
	action: async ({ db, body: { id } }) => {
		await db.deleteOne({ _id: ObjectId(id) });

		const connection = await dbPremise;
		const collection = connection.db().collection('events');
		await collection.updateMany({ tags: id }, { $pull: { tags: id } });
	}
});
