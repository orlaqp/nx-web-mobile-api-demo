import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CustomerApiService } from './customer-api.service';
import { Customer } from './customer.dto';
import { CustomerEntity } from './customer.entity';

@ApiTags('customers')
@Controller('customers')
export class CustomerApiController {
  constructor(private customerApiService: CustomerApiService) {}

  @ApiOkResponse({ type: Customer, isArray: true })
  @Get()
  search() {
    return this.customerApiService.findAll();
  }

  @ApiBody({ type: Customer })
  @Post()
  create(@Body() entity: Partial<Customer>) {
    return this.customerApiService.create(entity);
  }

  @ApiBody({ type: Customer })
  @Put()
  update(@Body() entity: CustomerEntity) {
    this.customerApiService.update(entity);
    return true;
  }

  @Delete()
  delete(@Param('id') id: string) {
    this.customerApiService.delete(id);
    return true;
  }
}
