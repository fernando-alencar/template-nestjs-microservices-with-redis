import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ApiService {

  constructor(@Inject('DEFAULT') private client: ClientProxy) { }

  async sum(payload: SumDto) {
    return this.client.send({ version: '1', cmd: 'sum' }, payload);
  }

  async reverse(payload: ReverseDto) {
    return this.client.send({ version: '1', cmd: 'reverse' }, payload);
  }

}