import { Router, Express } from 'express';

export const applyRoutes = (routes: Router[], app: Express) => {
	for (const route of routes) {
		app.use('/api/', route);
	}
};
