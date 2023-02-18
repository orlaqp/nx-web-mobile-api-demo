import { Module } from '@nestjs/common';
import { CustomerApiController } from './customer-api.controller';
import { CustomerApiService } from './customer-api.service';

@Module({
  controllers: [CustomerApiController],
  providers: [CustomerApiService],
  exports: [CustomerApiService],
})
export class CustomerApiModule {}
