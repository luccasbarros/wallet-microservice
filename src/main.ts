import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('Microservice is running');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:pKEMejd4Jl0G@18.204.207.235:5672/smartranking'],
      queue: 'wallet-backend',
    },
  });

  app.useLogger(logger);
}
bootstrap();
