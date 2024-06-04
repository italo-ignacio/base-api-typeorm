import type { RequestHandler } from 'express';

export type Controller = () => RequestHandler;
