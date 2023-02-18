import { Test } from '@nestjs/testing';
import { CustomerApiService } from './customer-api.service';

describe('CustomerApiService', () => {
  let service: CustomerApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CustomerApiService],
    }).compile();

    service = module.get(CustomerApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
