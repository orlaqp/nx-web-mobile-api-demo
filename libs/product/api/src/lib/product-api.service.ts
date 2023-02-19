import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductApiService {
    constructor(
        private readonly products: InMemoryDBService<ProductEntity>
      ) {}

      isEmpty() {
        return this.products.records.length === 0;
      }
    
      findAll() {
        return this.products.getAll();
      }
    
      create(entity: Partial<ProductEntity>) {
        const res = this.products.create(entity);
        return res.id;
      }

      createMany(entities: Partial<ProductEntity>[]) {
        const res = this.products.createMany(entities);
        return res;
      }
    
      update(entity: ProductEntity) {
        this.products.update(entity);
        return true;
      }
    
      delete(id: string) {
        this.products.delete(id);
        return true;
      }
}
