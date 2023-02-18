import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { CustomerApiModule } from '@nx-web-mobile-api-demo/customer/api';
import { OrderApiModule } from '@nx-web-mobile-api-demo/order/api';
import { ProductApiModule } from '@nx-web-mobile-api-demo/product/api';

@Module({
  imports: [
    InMemoryDBModule.forRoot({}),
    CustomerApiModule,
    OrderApiModule,
    ProductApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
