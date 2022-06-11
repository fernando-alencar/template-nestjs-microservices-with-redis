import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApiController } from './api.controller';
import { ApiService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DEFAULT',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        }
      }
    ])
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule { }
