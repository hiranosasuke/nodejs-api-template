import { Request, Response, NextFunction } from 'express';

export const authenticate = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	next();
};
