import { Inject, Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOKS_REPOSITORY')
    private model: typeof Book,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.model.findAll();
  }

  async findById(id: number): Promise<Book> {
    return this.model.findByPk(id);
  }

  async create(book: Book): Promise<void> {
    this.model.create(book);
  }

  async update(book: Book, id: number): Promise<[number, Book[]]> {
    return this.model.update(book, {
      where: { id },
    });
  }

  async delete(id: number): Promise<void> {
    return (await this.findById(id)).destroy();
  }
}
