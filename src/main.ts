import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,  //makes sures that if the dto does not contain the property it will not allow that property....
    forbidNonWhitelisted:true, //makes sures the property which is not present for that property it will throw error and will not process the request....
    transform:true
  }));
  await app.listen(3000);
}
bootstrap();
