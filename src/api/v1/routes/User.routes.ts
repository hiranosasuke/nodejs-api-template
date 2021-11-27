import express from 'express';
import userControllers from '../controllers/User.controller';
import { authenticate } from '../middlewares/Authenticate';
import { rateLimiterThreeSeconds } from '../middlewares/RateLimit';

var router = express.Router();

export default [
	/**
	 * @swagger
	 * /api/v1/users:
	 *   get:
	 *     description: Get all users
	 *     responses:
	 *       200:
	 *         description: Successful response
	 *       400:
	 *         description: Bad request
	 */
	router.get(
		'/users',
		[authenticate, rateLimiterThreeSeconds],
		userControllers.getUsers
	),
];
