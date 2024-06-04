import type { messageTypeResponse } from '@domain/errors';

export const defaultMessages = {
  alreadyExists: (field: messageTypeResponse): messageTypeResponse => ({
    english: `${field.english} already registered`,
    portuguese: `${field.portuguese} já está cadastrada`
  }),
  badFile: {
    english: 'Unsupported file',
    portuguese: 'Arquivo não suportado'
  },
  badOrder: {
    english: 'Sorting failure',
    portuguese: 'Falha na ordenação'
  },
  badRequest: {
    english: 'Request failed',
    portuguese: 'Falha na requisição'
  },
  notFound: (field: messageTypeResponse): messageTypeResponse => ({
    english: `${field.english} not found`,
    portuguese: `${field.portuguese} não encontrado`
  }),
  ok: {
    english: 'Request successfully',
    portuguese: 'Requisição bem sucedida'
  },
  successfullyCreated: {
    english: 'Successfully Created',
    portuguese: 'Criado com sucesso'
  },
  successfullyDeleted: {
    english: 'Successfully Deleted',
    portuguese: 'Excluído com sucesso'
  },
  successfullyUpdated: {
    english: 'Successfully Updated',
    portuguese: 'Atualizado com sucesso'
  },
  timeout: {
    english: 'Request has expired. Try again later',
    portuguese: 'Solicitação expirou. Tente novamente mais tarde'
  },
  unauthorized: {
    english: 'Unauthenticated user',
    portuguese: 'Usuário não autenticado'
  },
  uploadError(message: string): messageTypeResponse {
    if (message === 'File too large')
      return {
        english: 'File too large',
        portuguese: 'Arquivo muito pesado'
      };
    return {
      english: 'Error during file upload',
      portuguese: 'Erro durante o upload do arquivo'
    };
  },
  validationErrorResponse: {
    english: 'Failed during form validation',
    portuguese: 'Falha durante validação do formulário'
  }
};
