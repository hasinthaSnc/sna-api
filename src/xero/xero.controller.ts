import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';

@Controller('xero')
export class XeroController {
  constructor() {}

  @Post('redirect')
  async redirectURL(@Body() body: any): Promise<string> {
    console.log(JSON.stringify(body));
    return body;
  }
}
