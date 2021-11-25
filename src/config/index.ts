import { Router } from 'express';
import { Express } from 'express';

export const applyRoutes = (routes: Router[], app: Express) => {
	for (const route of routes) {
		app.use('/api/v1/', route);
	}
};
