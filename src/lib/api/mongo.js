import { MongoClient } from 'mongodb';
import { mongo } from '$lib/config/keys.json';

const client = new MongoClient(mongo, { useUnifiedTOpology: true, useNewUrlParser: true });
const clientPromise = client.connect();

export default clientPromise;
