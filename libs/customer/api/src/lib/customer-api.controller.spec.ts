import { Test } from '@nestjs/testing';
import { CustomerApiController } from './customer-api.controller';
import { CustomerApiService } from './customer-api.service';

describe('CustomerApiController', () => {
  let controller: CustomerApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CustomerApiService],
      controllers: [CustomerApiController],
    }).compile();

    controller = module.get(CustomerApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
