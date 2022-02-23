import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const config = new ConfigService();

const RMQ_CREDENTIAL = config.get<string>('RMQ_CREDENTIAL');
const RMQ_ACCESS = config.get<string>('RMQ_ACCESS');
const RMQ_USER = config.get<string>('RMQ_USER');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${RMQ_USER}:${RMQ_CREDENTIAL}@${RMQ_ACCESS}`],
      noAck: false,
      queue: 'wallet-test',
    },
  });

  app.listen();
}
bootstrap();
