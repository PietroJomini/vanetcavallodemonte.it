import { promises } from 'fs';

export const exists = async (target) => {
	try {
		await await promises.access(target);
		return true;
	} catch {
		return false;
	}
};
