import { Request, Response, NextFunction } from 'express';
import userServices from '../services/User.service';

const getUsers = async (req: Request, res: Response) => {
	try {
		userServices.getUsers('calling service from controller');
		res.status(200).send({ data: '🔥🔥🔥🔥🔥🔥🔥🔥' });
	} catch (error) {
		res.status(400).send(error);
	}
};

export default {
	getUsers,
};
