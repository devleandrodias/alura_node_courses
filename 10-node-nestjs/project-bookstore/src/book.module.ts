import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';

import { Book } from './book.model';
import { BookService } from './book.service';
import { BookController } from './book.controller';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.SEQUELIZE_HOST,
        port: Number(process.env.SEQUELIZE_PORT),
        username: process.env.SEQUELIZE_USERNAME,
        password: process.env.SEQUELIZE_PASSWORD,
        database: process.env.SEQUELIZE_DATABASE,
      });
      sequelize.addModels([Book]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

export const catsProviders = [
  {
    provide: 'BOOKS_REPOSITORY',
    useValue: Book,
  },
];

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [BookController],
  exports: [...databaseProviders, BookService],
  providers: [...databaseProviders, ...catsProviders, BookService],
})
export class ProductsModule {}
