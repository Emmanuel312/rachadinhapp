import { Router } from 'express';
import VacancyController from './app/controllers/VacancyController';
import auth from './app/middlewares/auth';

class Routes {
  constructor() {
    this.router = Router();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.router.use(auth);
  }

  routes() {
    this.router.post('/', VacancyController.store);
    this.router.get('/', VacancyController.index);
    this.router.get('/:id', VacancyController.show);
  }
}


export default new Routes().router;
