import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { OrderApiService } from './order-api.service';
import { OrderEntity } from './order.entity';

@Controller('orders')
export class OrderApiController {
  constructor(private orderApiService: OrderApiService) {}

  @Get()
  search() {
    return this.orderApiService.findAll();
  }

  @Post()
  create(entity: Partial<OrderEntity>) {
    return this.orderApiService.create(entity);
  }

  @Put()
  update(entity: OrderEntity) {
    this.orderApiService.update(entity);
    return true;
  }

  @Delete()
  delete(id: string) {
    this.orderApiService.delete(id);
    return true;
  }
}
