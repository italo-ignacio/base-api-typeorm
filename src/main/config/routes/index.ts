/* eslint-disable function-paren-newline */
import { Router } from 'express';
import { api } from '@domain/helpers';
import { join } from 'path';
import { readdirSync } from 'fs';
import { validateTokenMiddleware } from '@main/middleware/validation';
import type { Express } from 'express';

export const setupRoutes = (app: Express): void => {
  const publicRouter = Router();
  const privateRouter = Router();

  readdirSync(join(__dirname, '..', '..', 'routes', 'public')).map(async (file) =>
    (await import(`../../routes/public/${file}`)).default(publicRouter)
  );

  readdirSync(join(__dirname, '..', '..', 'routes', 'private')).map(async (file) =>
    (await import(`../../routes/private/${file}`)).default(privateRouter)
  );

  app.use(api.baseUrl, publicRouter);
  app.use(api.baseUrl, validateTokenMiddleware(), privateRouter);

  app.get('*', (req, res) => {
    res.json({
      message: 'Api running successfully (◡‿◡)'
    });
  });
};
