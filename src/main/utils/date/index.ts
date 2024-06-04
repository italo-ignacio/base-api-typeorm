const addMonth = 1;
const padStart = 2;

const padTo2Digits = (num: number | string): string => num.toString().padStart(padStart, '0');

export const dateToPtbrFormat = (date: Date): string =>
  [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + addMonth), date.getFullYear()].join(
    '/'
  );

export const dateToEnUsFormat = (date: Date): string =>
  [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + addMonth), date.getFullYear()]
    .reverse()
    .join('-');

export const getCurrentDateInMillis = (): number => new Date().getTime();

export const dateToErrorLogger = (): string => {
  const date = new Date()
    .toString()
    .replace(/[A-Z]{3}\+/u, '+')
    .split(/ /u);

  return `${date[2]}-${date[1]}-${date[3]}:${date[4]} ${date[5]}`;
};
