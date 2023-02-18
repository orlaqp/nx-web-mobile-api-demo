import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { CustomerApiController } from './customer-api.controller';
import { CustomerApiService } from './customer-api.service';

@Module({
  imports: [InMemoryDBModule.forFeature('customer')],
  controllers: [CustomerApiController],
  providers: [CustomerApiService],
  exports: [CustomerApiService],
})
export class CustomerApiModule {}
