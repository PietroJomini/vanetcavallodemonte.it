import { v4 as uuid } from 'uuid';
import { serialize } from 'cookie';

let sessions = [];

export const create = () => {
	const session = { id: uuid() };
	sessions.push(session);
	return session;
};

export const get = (id) => {
	return sessions.find((session) => session.id === id);
};

export const del = (id) => {
	sessions = sessions.filter((session) => session.id !== id);
};

export const cookie = (id) => ({
	'Set-Cookie': serialize('session_id', id, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		maxAge: 60 * 60 * 24 * 7
	})
});
