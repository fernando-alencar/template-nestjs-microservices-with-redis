import { Controller, Get } from '@nestjs/common';
import { ApiService } from './app.service';

@Controller()
export class ApiController {
  constructor(private readonly appService: ApiService) { }

  @Get("/sum")
  async sum() {
    console.log('teste')
    const number1 = Math.random()
    const number2 = Math.random()
    const payload = {
      number1, number2
    }
    return this.appService.sum(payload);
  }


  @Get("/reverse")
  async ping() {
    const payload = { value: "Hello World" }
    return this.appService.reverse(payload);
  }

}
