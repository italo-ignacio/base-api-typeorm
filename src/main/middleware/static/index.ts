import { join } from 'path';
import { static as staticExpress } from 'express';

export const staticRoute = '/static';

export const staticFolder = staticExpress(join(__dirname, '..', '..', '..', 'static'));

export const imageFolder = (filename: string): string =>
  join(__dirname, '..', '..', '..', 'static', 'uploads', filename);
