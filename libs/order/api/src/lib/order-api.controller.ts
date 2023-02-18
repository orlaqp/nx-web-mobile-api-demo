import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrderApiService } from './order-api.service';
import { Order } from './order.dto';
import { OrderEntity } from './order.entity';

@ApiTags('orders')
@Controller('orders')
export class OrderApiController {
  constructor(private orderApiService: OrderApiService) {}

  @ApiOkResponse({ type: Order, isArray: true })
  @Get()
  search() {
    return this.orderApiService.findAll();
  }

  @ApiBody({ type: Order })
  @Post()
  create(@Body() entity: Partial<Order>) {
    return this.orderApiService.create(entity);
  }

  @ApiBody({ type: Order })
  @Put()
  update(@Body() entity: OrderEntity) {
    this.orderApiService.update(entity);
    return true;
  }

  @Delete()
  delete(@Param('id') id: string) {
    this.orderApiService.delete(id);
    return true;
  }
}
