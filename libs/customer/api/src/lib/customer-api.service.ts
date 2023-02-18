import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Customer } from './customer.dto';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomerApiService {
  constructor(
    private readonly customerService: InMemoryDBService<CustomerEntity>
  ) {}

  findAll(): Observable<Customer[]> {
    return this.customerService.getAllAsync();
  }

  create(entity: Partial<CustomerEntity>) {
    const res = this.customerService.create(entity);
    return res.id;
  }

  update(entity: CustomerEntity) {
    this.customerService.update(entity);
    return true;
  }

  delete(id: string) {
    this.customerService.delete(id);
    return true;
  }
}
