import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderApiService {
    constructor(
        private readonly customerService: InMemoryDBService<OrderEntity>
      ) {}
    
      findAll() {
        return this.customerService.getAll();
      }
    
      create(entity: Partial<OrderEntity>) {
        const res = this.customerService.create(entity);
        return res.id;
      }
    
      update(entity: OrderEntity) {
        this.customerService.update(entity);
        return true;
      }
    
      delete(id: string) {
        this.customerService.delete(id);
        return true;
      }
}
