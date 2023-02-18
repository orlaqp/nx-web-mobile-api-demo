import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface CustomerEntity extends InMemoryDBEntity {
  firstName: string;
  lastName: string;
  emailAddress: string;
}
