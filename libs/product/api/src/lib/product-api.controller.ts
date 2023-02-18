import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductApiService } from './product-api.service';
import { Product } from './product.dto';
import { ProductEntity } from './product.entity';

@ApiTags('products')
@Controller('products')
export class ProductApiController {
  constructor(private productApiService: ProductApiService) {}

  @ApiOkResponse({ type: Product, isArray: true })
  @Get()
  search() {
    return this.productApiService.findAll();
  }

  @ApiBody({ type: Product })
  @Post()
  create(@Body() entity: Partial<Product>) {
    return this.productApiService.create(entity);
  }

  @ApiBody({ type: Product })
  @Put()
  update(@Body() entity: ProductEntity) {
    this.productApiService.update(entity);
    return true;
  }

  @Delete()
  delete(@Param('id') id: string) {
    this.productApiService.delete(id);
    return true;
  }
}
