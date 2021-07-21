import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService extends TypeOrmCrudService<Book> {
  constructor(@InjectRepository(Book) repo) {
    super(repo);
  }
}
