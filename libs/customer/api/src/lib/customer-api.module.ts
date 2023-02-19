import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { CustomerApiController } from './customer-api.controller';
import { CustomerApiService } from './customer-api.service';
import { SeedService } from './seed.service';

@Module({
  imports: [InMemoryDBModule.forFeature('customer')],
  controllers: [CustomerApiController],
  providers: [CustomerApiService, SeedService],
  exports: [CustomerApiService, SeedService],
})
export class CustomerApiModule {
  constructor(seedService: SeedService) {
    seedService.seed();
  }
}
