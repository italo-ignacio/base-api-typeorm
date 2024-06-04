import { dateToErrorLogger } from '@main/utils/date';
import fs from 'fs';
import path from 'path';

export const errorLogger = (error: unknown): void => {
  const date = dateToErrorLogger();
  const pathError = path.resolve(__dirname, '..', '..', '..', 'logs', 'error');

  if (!fs.existsSync(pathError)) fs.mkdirSync(pathError, { recursive: true });

  const pathErrorLog = path.resolve(pathError, 'error.log');
  let stringError = '';

  if (error instanceof Error)
    stringError = `------------------------------------------------\nDate: ${date}\nError: ${
      error.name
      // eslint-disable-next-line no-ternary
    }: ${error.message} ${typeof error.stack === 'undefined' ? '' : `at ${error.stack}`}`;
  else
    stringError = `------------------------------------------------\nDate: ${date}\nError: ${JSON.stringify(
      error
    )} `;

  fs.appendFile(pathErrorLog, stringError, (fsError) => {
    if (fsError !== null) throw fsError;
  });
};
