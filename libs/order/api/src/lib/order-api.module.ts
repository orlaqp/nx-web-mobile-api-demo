import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { OrderApiController } from './order-api.controller';
import { OrderApiService } from './order-api.service';

@Module({
  imports: [InMemoryDBModule.forFeature('order')],
  controllers: [OrderApiController],
  providers: [OrderApiService],
  exports: [OrderApiService],
})
export class OrderApiModule {}
