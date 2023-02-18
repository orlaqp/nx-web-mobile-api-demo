import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductApiService {
    constructor(
        private readonly customerService: InMemoryDBService<ProductEntity>
      ) {}
    
      findAll() {
        return this.customerService.getAll();
      }
    
      create(entity: Partial<ProductEntity>) {
        const res = this.customerService.create(entity);
        return res.id;
      }
    
      update(entity: ProductEntity) {
        this.customerService.update(entity);
        return true;
      }
    
      delete(id: string) {
        this.customerService.delete(id);
        return true;
      }
}
