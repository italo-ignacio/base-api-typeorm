import { Router } from 'express';

export default (inputRouter: Router): void => {
  const router = Router();

  router.get('/', (req, res) => {
    res.json({
      message: 'Api running successfully (◡‿◡)'
    });
  });

  inputRouter.use('/', router);
};
