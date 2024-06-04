import { emailNotRequired, phoneNotRequired, stringNotRequired } from '@main/utils';
import { yup } from '@infra/yup';

export const updateUserSchema = yup.object().shape({
  body: yup.object().shape({
    email: emailNotRequired(),
    name: stringNotRequired({
      english: 'name',
      length: 255,
      portuguese: 'nome'
    }),
    password: stringNotRequired(),
    phone: phoneNotRequired()
  })
});
