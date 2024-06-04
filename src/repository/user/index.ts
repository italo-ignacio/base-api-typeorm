import { DataSource } from '@infra/database';
import { UserEntity } from '@entity/user';

export const userRepository = DataSource.getRepository(UserEntity);
