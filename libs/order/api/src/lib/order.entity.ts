import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface OrderEntity extends InMemoryDBEntity {
  no: string;
  timestamp: Date;
  total: number;
}
