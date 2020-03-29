import { Router } from 'express';
import UsersController from './controllers/UsersController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Hello World');
});

routes.get('/users', UsersController.index);
routes.get('/users/create', UsersController.create);

export default routes;
