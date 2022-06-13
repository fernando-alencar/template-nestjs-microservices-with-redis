import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      url: 'tcp://localhost:6379',
      retryAttempts: 3,
      retryDelay: 0
    },
  })
  app.startAllMicroservices()

  await app.listen(3000);
}
bootstrap();
