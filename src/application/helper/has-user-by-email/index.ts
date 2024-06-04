import { IsNull } from 'typeorm';
import { userRepository } from '@repository/user';
import type { UserEntity } from '@entity/user';

export const hasUserByEmail = async (
  email: string
): Promise<
  Pick<UserEntity, 'createdAt' | 'email' | 'id' | 'name' | 'phone' | 'role'> | boolean
> => {
  return (
    (await userRepository.findOne({
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phone: true,
        role: true
      },
      where: { email, finishedAt: IsNull() }
    })) ?? false
  );
};
