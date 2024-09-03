import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoListModule } from './todo-list/todo-list.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    UserModule,
    TodoListModule,
    TaskModule,
  ],
})
export class AppModule {}
