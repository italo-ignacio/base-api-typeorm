import type { messageTypeResponse } from '@domain/errors';

export const yupMessages = {
  dateSchema: {
    english: 'Invalid date',
    portuguese: 'Data inválida'
  },

  emailSchema: {
    english: 'Invalid email',
    portuguese: 'E-mail inválido'
  },

  maxLength: (field: messageTypeResponse, number: number): messageTypeResponse => ({
    english: `The field ${field.english} must be at most ${number} characters`,
    portuguese: `O campo ${field.portuguese} deve ter no máximo ${number} caracteres`
  }),

  numberSchema: (value: messageTypeResponse): messageTypeResponse => ({
    english: `The field ${value.english} must be a number`,
    portuguese: `O campo ${value.portuguese} deve ser uma número`
  }),

  phoneSchema: {
    english: 'Invalid phone number',
    portuguese: 'Número de telefone inválido'
  },

  requiredSchema: (value: messageTypeResponse): messageTypeResponse => ({
    english: `The field ${value.english} is required`,
    portuguese: `O campo ${value.portuguese} é obrigatório`
  }),

  zipCodeSchema: {
    english: 'Invalid zipCode',
    portuguese: 'CEP inválido'
  }
};
