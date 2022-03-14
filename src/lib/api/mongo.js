import { MongoClient } from 'mongodb';

import { config } from 'dotenv';
config({ path: './src/lib/config/.env' });

const client = new MongoClient(process.env.MONGO, {
	useUnifiedTOpology: true,
	useNewUrlParser: true
});
const clientPromise = client.connect();

export default clientPromise;
