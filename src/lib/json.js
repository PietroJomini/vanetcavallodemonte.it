export const flatten = (json = {}, prev = undefined) =>
	Object.keys(json).reduce((acc, key) => {
		const id = prev ? `${prev}.${key}` : key;
		if (typeof json[key] === 'object') return [...acc, ...flatten(json[key], id)];
		return [...acc, [id, json[key]]];
	}, []);

export const unflatten = (flattened = []) =>
	flattened.reduce((acc, [key, value]) => {
		const keys = key.split('.');
		const pointer = keys.slice(0, -1).reduce((acc, key) => {
			if (acc[key] === undefined) acc[key] = {};
			return acc[key];
		}, acc);

		pointer[keys[keys.length - 1]] = value;
		return acc;
	}, {});
