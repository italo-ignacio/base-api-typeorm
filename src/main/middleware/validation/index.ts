import { DataSource } from '@infra/database';
import { IsNull } from 'typeorm';
import { UserEntity } from '@entity/user';
import { env } from '@main/config/env';
import { errorLogger, removeBearer, unauthorized } from '@main/utils';
import { verify } from 'jsonwebtoken';
import type { Controller } from '@domain/protocols';
import type { NextFunction, Request, Response } from 'express';
import type { tokenInput } from '@domain/token';

export const validateTokenMiddleware: Controller =
  // eslint-disable-next-line consistent-return
  () => async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { authorization } = request.headers;

      if (typeof authorization === 'undefined') return unauthorized({ response });

      const accessToken = removeBearer(authorization);

      if (accessToken === null) return unauthorized({ response });

      const { SECRET } = env.JWT;
      const { user } = verify(accessToken, SECRET) as { user: tokenInput };

      if (
        typeof user.id === 'undefined' ||
        typeof user.name === 'undefined' ||
        typeof user.email === 'undefined' ||
        typeof user.role === 'undefined'
      )
        return unauthorized({ response });

      const userRepository = DataSource.getRepository(UserEntity);

      const account = await userRepository.findOne({
        select: { id: true },
        where: { ...user, finishedAt: IsNull() }
      });

      if (account === null) return unauthorized({ response });

      Object.assign(request, { user });
      next();
    } catch (error) {
      errorLogger(error);

      return unauthorized({ response });
    }
  };
