require('dotenv').config();
import express, { Request, Response } from 'express';
import { applyMiddleware, applyRoutes } from './config/index';
import { applySwagger } from './config/swagger.config';
import routes from './api/routes/index';
import middleware from './api/middlewares';

const app = express();

applyMiddleware(middleware, app);
applyRoutes(routes, app);
applySwagger(app);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
