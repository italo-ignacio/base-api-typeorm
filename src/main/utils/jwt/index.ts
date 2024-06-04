import { env } from '@main/config/env';
import { sign } from 'jsonwebtoken';
import type { tokenInput } from '@domain/token';

export const removeBearer = (accessToken: string): string | null => {
  const [Bearer, hash] = accessToken.split(' ');

  if (Bearer === 'Bearer') return hash;

  return null;
};

export const incrementBearer = (token: string): string => `Bearer ${token}`;

interface generateTokenOutput {
  accessToken: string;
}

export const generateToken = (user: tokenInput): generateTokenOutput => {
  const { EXPIRES_IN, SECRET } = env.JWT;

  const data = {
    accessToken: sign({ user }, SECRET, { expiresIn: EXPIRES_IN })
  };

  return data;
};
