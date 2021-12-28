import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './book.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModule);
  await app.listen(3000);
}
bootstrap();
