import { Test } from '@nestjs/testing';
import { OrderApiController } from './order-api.controller';
import { OrderApiService } from './order-api.service';

describe('OrderApiController', () => {
  let controller: OrderApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [OrderApiService],
      controllers: [OrderApiController],
    }).compile();

    controller = module.get(OrderApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
