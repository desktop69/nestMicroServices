import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums';
import { AppModule } from './app.module';

async function bootstrap() {
const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  AppModule,
  {
    transport : Transport.TCP
  }
);
app.listen();
}
bootstrap();
