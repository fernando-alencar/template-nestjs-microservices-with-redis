import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { SumService } from './sum.service';

type PayloadSumDto = { value: number[] }

@Controller()
export class SumV2Controller {
  constructor(private readonly sumService: SumService) { }

  @MessagePattern({ version: '2', cmd: 'sum' })
  async sum(payload: PayloadSumDto): Promise<Number> {
    return this.sumService.sum(payload);
  }

}
