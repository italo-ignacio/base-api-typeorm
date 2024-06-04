import type { tokenInput } from '@domain/token';

declare global {
  namespace Express {
    interface Request {
      user: tokenInput;
    }
  }
}
