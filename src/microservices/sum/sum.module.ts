import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SumController } from './sum.controller';
import { SumService } from './sum.service';

@Module({
  imports: [],
  controllers: [SumController],
  providers: [SumService],
})
export class SumModule { }
