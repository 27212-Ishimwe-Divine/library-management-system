// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { Book } from './books/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5432,
      username: 'postgres',
      password: '123', 
      database: 'library_db',
      entities: [Book], 
      synchronize: true,
                        
    }),
    BooksModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}