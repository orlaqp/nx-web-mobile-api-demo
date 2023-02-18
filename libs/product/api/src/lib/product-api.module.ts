import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { ProductApiController } from './product-api.controller';
import { ProductApiService } from './product-api.service';

@Module({
  imports: [InMemoryDBModule.forFeature('product')],
  controllers: [ProductApiController],
  providers: [ProductApiService],
  exports: [ProductApiService],
})
export class ProductApiModule {}
