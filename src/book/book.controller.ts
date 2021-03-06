import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Book } from './book.entity';
import { BookService } from './book.service';
import { CreateBookDto } from './book.dto';

@Crud({
  model: {
    type: Book,
  },
  dto: {
    create: CreateBookDto,
  },
  params: {
    code: {
      field: 'code',
      type: 'string',
      primary: true,
    },
  },
})
@Controller('book')
export class BookController implements CrudController<Book> {
  constructor(public service: BookService) {}
}
