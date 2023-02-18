import { Test } from '@nestjs/testing';
import { ProductApiService } from './product-api.service';

describe('ProductApiService', () => {
  let service: ProductApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ProductApiService],
    }).compile();

    service = module.get(ProductApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
