import type { InsertResult } from 'typeorm';

export const insertId = (payload: InsertResult): number => {
  const [{ id }] = payload.identifiers;

  return id;
};
