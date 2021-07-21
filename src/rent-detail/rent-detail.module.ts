import { Module } from '@nestjs/common';
import { RentDetailService } from './rent-detail.service';
import { RentDetailController } from './rent-detail.controller';

@Module({
  providers: [RentDetailService],
  controllers: [RentDetailController]
})
export class RentDetailModule {}
