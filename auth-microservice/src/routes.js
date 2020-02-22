import { Router } from 'express';
import AuthController from './app/controllers/AuthController';

class Routes {
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post('/signup', AuthController.signUp);
    this.router.post('/signin', AuthController.signIn);
  }
}


export default new Routes().router;
