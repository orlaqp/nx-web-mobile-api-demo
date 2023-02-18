import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CustomerApiService } from './customer-api.service';
import { CustomerEntity } from './customer.entity';

@Controller('customers')
export class CustomerApiController {
  constructor(private customerApiService: CustomerApiService) {}

  @Get()
  search() {
    return this.customerApiService.findAll();
  }

  @Post()
  create(entity: Partial<CustomerEntity>) {
    return this.customerApiService.create(entity);
  }

  @Put()
  update(entity: CustomerEntity) {
    this.customerApiService.update(entity);
    return true;
  }

  @Delete()
  delete(id: string) {
    this.customerApiService.delete(id);
    return true;
  }
}
