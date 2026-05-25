import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'The email address of the account' })
  email: string;
  @ApiProperty({ description: 'The password of the account' })
  password: string;
}

export class LoginResponseDto {
  @ApiProperty({ description: 'Access token given by the backend' })
  access_token: string;
}