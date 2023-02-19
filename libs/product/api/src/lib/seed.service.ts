import { Injectable } from '@nestjs/common';
import { ProductApiService } from './product-api.service';

@Injectable()
export class SeedService {
    constructor(private productApiService: ProductApiService) {}

    seed() {
        this.productApiService.createMany([
            { name: 'Product 1', price: 10 },
            { name: 'Product 2', price: 20 },
            { name: 'Product 3', price: 30 },
        ])
    }
}
