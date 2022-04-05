require('dotenv').config();
import express, { Request, Response } from 'express';
import { applyRoutes } from './config/index';
import { applySwagger } from './config/swagger.config';
import routes from './api/routes/index';

const app = express();

applyRoutes(routes, app);
applySwagger(app);

app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
