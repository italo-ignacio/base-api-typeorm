import { Router } from 'express';
import { insertUserController } from '@application/controller/user';

export default (inputRouter: Router): void => {
  const router = Router();

  router.post('/', insertUserController());

  inputRouter.use('/user', router);
};
