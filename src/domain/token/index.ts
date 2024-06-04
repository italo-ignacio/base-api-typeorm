import type { Role } from '@domain/enum';

export interface tokenInput {
  id: number;
  name: string;
  email: string;
  role: Role;
}
