import { Request, Response, NextFunction } from 'express';

const getUsers = async (req: Request, res: Response) => {
	try {
		res.status(200).send({ data: '🔥🔥🔥🔥🔥🔥🔥🔥' });
	} catch (error) {
		res.status(400).send(error);
	}
};

export default {
	getUsers,
};
