import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';

import { Book } from './book.model';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly service: BookService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Book> {
    return this.service.findById(id);
  }

  @Post()
  async create(@Body() Book: Book): Promise<void> {
    return this.create(Book);
  }

  @Put(':id')
  async update(
    @Body() Book: Book,
    @Param('id') id: number,
  ): Promise<[number, Book]> {
    return this.update(Book, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.delete(id);
  }
}
