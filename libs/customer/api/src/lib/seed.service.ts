import { Injectable } from '@nestjs/common';
import { CustomerApiService } from './customer-api.service';

@Injectable()
export class SeedService {
    constructor(private customerApiService: CustomerApiService) {}

    seed() {
        this.customerApiService.createMany([
            { firstName: 'John', lastName: 'Joe', emailAddress: 'jd@email.com' },
            { firstName: 'Jane', lastName: 'Doe', emailAddress: 'jane@email.com' },
            { firstName: 'Cecilia', lastName: 'Johnson', emailAddress: 'cecilia@email.com' }
        ]);
    }
}
