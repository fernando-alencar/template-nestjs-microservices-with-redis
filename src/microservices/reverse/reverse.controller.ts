import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { ReverseService } from './reverse.service';

@Controller()
export class ReverseController {
  constructor(private readonly reverseService: ReverseService) { }

  @MessagePattern({ version: '1', cmd: 'reverse' })
  async reverse(payload: Object): Promise<Number> {
    return this.reverseService.reverse(payload);
  }

}
