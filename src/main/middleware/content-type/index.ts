import type { NextFunction, Request, Response } from 'express';

export const contentType = (req: Request, response: Response, next: NextFunction): void => {
  response.type('json');
  next();
};
