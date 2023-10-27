import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'qna-table.cri1wvqixdyf.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  username: 'root',
  password: 'dltngus0303',
  database: 'question',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
