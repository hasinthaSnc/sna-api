import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { XeronModule } from './xero/xero.module';

@Module({
  imports: [XeronModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
