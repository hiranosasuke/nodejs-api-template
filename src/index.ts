require('dotenv').config();
import express, { Request, Response } from 'express';
import { applyRoutes } from './config/index';
import routes from './api/v1/routes/index';

const app = express();

applyRoutes(routes, app);

app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
