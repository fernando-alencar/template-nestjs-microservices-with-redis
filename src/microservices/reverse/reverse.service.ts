import { Injectable } from '@nestjs/common';

@Injectable()
export class ReverseService {

  async reverse(payload) {
    return payload.value.split('').reverse().join('')
  }

}