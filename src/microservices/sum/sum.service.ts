import { Injectable } from '@nestjs/common';

@Injectable()
export class SumService {

  async sum(payload) {
    return payload.number1 + payload.number2
  }

}