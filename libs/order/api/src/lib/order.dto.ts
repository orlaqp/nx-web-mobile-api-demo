import { ApiProperty } from "@nestjs/swagger";

export class Order {
    @ApiProperty()
    no!: string;
    
    @ApiProperty()
    timestamp!: Date;
    
    @ApiProperty()
    total!: number;
}