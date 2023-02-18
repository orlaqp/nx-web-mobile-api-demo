import { ApiProperty } from "@nestjs/swagger";

export class Product {
    @ApiProperty()
    name!: string;
    
    @ApiProperty()
    price!: number;
  }
  