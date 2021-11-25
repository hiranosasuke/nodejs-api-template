import { Request, Response, NextFunction } from 'express';
import express from 'express';

var router = express.Router();

export default [
	/**
	 * GET /users
	 *
	 * Gets all users in db
	 */
	router.get('/users', async (req: Request, res: Response) => {
		try {
			res.status(200).send({ data: '🔥🔥🔥🔥🔥🔥🔥🔥' });
		} catch (error) {
			res.status(400).send(error);
		}
	}),
];
