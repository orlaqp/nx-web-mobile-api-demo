import { Controller } from '@nestjs/common';
import { CustomerApiService } from './customer-api.service';

@Controller('customer-api')
export class CustomerApiController {
  constructor(private customerApiService: CustomerApiService) {}
}
