import { v4 as uuid } from 'uuid';

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

export const all = () => [...sessions];
