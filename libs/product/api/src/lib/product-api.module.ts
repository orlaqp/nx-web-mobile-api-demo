import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { ProductApiController } from './product-api.controller';
import { ProductApiService } from './product-api.service';
import { SeedService } from './seed.service';

@Module({
  imports: [InMemoryDBModule.forFeature('product')],
  controllers: [ProductApiController],
  providers: [ProductApiService, SeedService],
  exports: [ProductApiService],
})
export class ProductApiModule {
  constructor(seedService: SeedService) {
    seedService.seed();
  }
}
