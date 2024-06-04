import type { messageTypeResponse } from '@domain/errors';

export const authMessages = {
  notFound: {
    english: 'User not found',
    portuguese: 'Usuário não encontrado'
  },
  notPermission: (field: messageTypeResponse): messageTypeResponse => ({
    english: `You are not allowed to ${field.english}`,
    portuguese: `Você não tem permissão para ${field.portuguese}`
  }),
  userAlreadyExists: {
    english: 'User already exists',
    portuguese: 'Usuário já existe'
  }
};
