import { Test } from '@nestjs/testing';
import { ProductApiController } from './product-api.controller';
import { ProductApiService } from './product-api.service';

describe('ProductApiController', () => {
  let controller: ProductApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ProductApiService],
      controllers: [ProductApiController],
    }).compile();

    controller = module.get(ProductApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
