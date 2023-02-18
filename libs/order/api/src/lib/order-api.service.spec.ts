import { Test } from '@nestjs/testing';
import { OrderApiService } from './order-api.service';

describe('OrderApiService', () => {
  let service: OrderApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [OrderApiService],
    }).compile();

    service = module.get(OrderApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
