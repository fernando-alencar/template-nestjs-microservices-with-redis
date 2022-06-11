import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { SumService } from './sum.service';

@Controller()
export class SumController {
  constructor(private readonly sumService: SumService) { }

  @MessagePattern({ version: '1', cmd: 'sum' })
  async sum(payload: Object): Promise<Number> {
    return this.sumService.sum(payload);
  }

}
