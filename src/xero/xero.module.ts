import { Module } from '@nestjs/common';
import { XeroController } from './xero.controller';

@Module({
  imports: [],
  controllers: [XeroController],
  providers: [],
})
export class XeronModule {}
