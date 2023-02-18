import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductApiService } from './product-api.service';
import { ProductEntity } from './product.entity';

@Controller('products')
export class ProductApiController {
  constructor(private productApiService: ProductApiService) {}

  @Get()
  search() {
    return this.productApiService.findAll();
  }

  @Post()
  create(entity: Partial<ProductEntity>) {
    return this.productApiService.create(entity);
  }

  @Put()
  update(entity: ProductEntity) {
    this.productApiService.update(entity);
    return true;
  }

  @Delete()
  delete(id: string) {
    this.productApiService.delete(id);
    return true;
  }
}
