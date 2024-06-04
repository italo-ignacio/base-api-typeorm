import { stringRequired } from '@main/utils';
import { yup } from '@infra/yup';

export const authenticateSchema = yup.object().shape({
  body: yup.object().shape({
    email: stringRequired({
      english: 'user',
      portuguese: 'usuário'
    }),
    password: stringRequired({
      english: 'password',
      portuguese: 'senha'
    })
  })
});
