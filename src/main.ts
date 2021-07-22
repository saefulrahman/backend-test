import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //API Docs Book
  const optionsBook = new DocumentBuilder().setTitle('Book CRUD').setDescription('The book API description').setVersion('1.0').addTag('book').build();
  const documentBook = SwaggerModule.createDocument(app, optionsBook);
  SwaggerModule.setup('api/docs', app, documentBook);

  //API Docs Member
  // const optionsMember = new DocumentBuilder().setTitle('Member CRUD').setDescription('The member API description').setVersion('1.0').addTag('member').build();
  // const documentMember = SwaggerModule.createDocument(app, optionsMember);
  // SwaggerModule.setup('api/docs/member', app, documentMember);

  await app.listen(3000);
}
bootstrap();
