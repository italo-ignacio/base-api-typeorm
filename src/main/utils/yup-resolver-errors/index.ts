/* eslint-disable no-ternary */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ValidationError } from 'yup';

export interface PrettyYupError {
  message: string;
  param: string | undefined;
}

export const formatYupError = (error: ValidationError): PrettyYupError[] =>
  error.inner.map((item) => ({
    message: item.message.includes('portuguese') ? JSON.parse(item.message) : item.message,
    param: item.path
  }));
