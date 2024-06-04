import { Role } from '@domain/enum';
import type { Request } from 'express';

export const userIsOwner = (request: Request): boolean =>
  Number(request.params.id) === Number(request.user.id) || request.user.role === Role.ADMIN;
