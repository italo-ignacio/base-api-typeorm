import { DataSource as TypeOrmDataSource } from 'typeorm';
import { env } from '@main/config/env';

const rootPath = typeof process.env.TS_NODE_DEV === 'undefined' ? 'build' : 'src';

export const DataSource = new TypeOrmDataSource({
  database: env.DATABASE.name,
  entities: [`${rootPath}/entity/**/*`],
  host: env.DATABASE.host,
  logging: [],
  password: env.DATABASE.password,
  port: Number(env.DATABASE.port),
  ssl: env.DATABASE.ssl,
  synchronize: env.DATABASE.synchronize,
  type: 'postgres',
  username: env.DATABASE.userName
});
