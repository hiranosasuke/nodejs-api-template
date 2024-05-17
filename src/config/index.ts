import { Router, Express } from 'express';

type Wrapper = (router: Router) => void;

export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  router: Router
) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(router);
  }
};

export const applyRoutes = (routes: Router[], app: Express) => {
  for (const route of routes) {
    app.use('/api/', route);
  }
};
