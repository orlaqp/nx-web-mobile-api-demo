import { ApiProperty } from '@nestjs/swagger';

export class Customer {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  firstName?: string;

  @ApiProperty()
  lastName?: string;

  @ApiProperty()
  emailAddress?: string;
}
