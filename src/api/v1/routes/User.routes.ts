import express from 'express';
import userControllers from '../controllers/User.controller';
import { authenticate } from '../middlewares/Authenticate';

var router = express.Router();

export default [
	/**
	 * GET /users
	 *
	 * Gets all users in db
	 */
	router.get('/users', authenticate, userControllers.getUsers),
];
