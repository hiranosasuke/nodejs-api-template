import { Request, Response, NextFunction } from 'express';
import express from 'express';
import userControllers from '../controllers/UserController';

var router = express.Router();

export default [
	/**
	 * GET /users
	 *
	 * Gets all users in db
	 */
	router.get('/users', userControllers.getUsers),
];
