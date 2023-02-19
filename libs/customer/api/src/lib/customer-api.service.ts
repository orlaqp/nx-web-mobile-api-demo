import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Customer } from './customer.dto';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomerApiService {
  constructor(
    private readonly customers: InMemoryDBService<CustomerEntity>
  ) {}

  isEmpty() {
    return this.customers.records.length === 0;
  }

  findAll(): Observable<Customer[]> {
    return this.customers.getAllAsync();
  }

  create(entity: Partial<CustomerEntity>) {
    const res = this.customers.create(entity);
    return res.id;
  }

  createMany(entities: Partial<CustomerEntity>[]) {
    const res = this.customers.createMany(entities);
    return res.map(r => r.id);
  }

  update(entity: CustomerEntity) {
    this.customers.update(entity);
    return true;
  }

  delete(id: string) {
    this.customers.delete(id);
    return true;
  }
}
