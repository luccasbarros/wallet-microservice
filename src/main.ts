import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:pKEMejd4Jl0G@18.204.207.235:5672/walletilia'],
      queue: 'wallet-test',
      logger: new Logger('SERVER').log('Microservice is running'),
    },
  });

  app.listen();
}
bootstrap();
