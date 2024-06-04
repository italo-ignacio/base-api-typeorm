import { Router } from 'express';
import {
  deleteUserController,
  findOneUserController,
  findUserController,
  updateUserController
} from '@application/controller/user';

export default (inputRouter: Router): void => {
  const router = Router();

  router.get('', findUserController());
  router.get('/:id', findOneUserController());
  router.put('/:id', updateUserController());
  router.delete('/:id', deleteUserController());

  inputRouter.use('/user', router);
};
