import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApiModule } from './api/api.module';
import { ReverseModule } from './microservices/reverse/reverse.module';
import { SumModule } from './microservices/sum/sum.module';

@Module({
  imports: [
    ApiModule,
    SumModule,
    ReverseModule,
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
  controllers: [],
  providers: [],
})
export class AppModule { }
