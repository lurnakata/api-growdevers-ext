import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

routes.post('/login', SessionController.store);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/', (req, res) => {
  res.render('../src/app/views/index.ejs');
});
routes.get('/sign-up', (req, res) => {
  res.render('../src/app/views/sign-up.ejs');
});

// routes.get('/users/:uid', UserController.show);

export default routes;
