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
  @ApiProperty({ description: 'Refresh token given by the backend' })
  refresh_token: string;
}

export class RefreshTokenDto {
  @ApiProperty({ description: 'Refresh token given by the backend' })
  refresh_token: string;
}

export class RefreshTokenResponseDto {
  @ApiProperty({ description: 'Access token given by the backend' })
  access_token: string;
  @ApiProperty({ description: 'Refresh token given by the backend' })
  refresh_token: string;
}