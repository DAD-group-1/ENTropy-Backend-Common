import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class LoginRequestDto {
  @ApiProperty({ description: 'The email address of the account' })
  email: string;

  @ApiProperty({ description: 'The password of the account' })
  @Exclude()
  password: string;
}

export class LoginResponseDto {
  @ApiProperty({ description: 'Access token given by the backend' })
  access_token: string;

  @ApiProperty({ description: 'Refresh token given by the backend' })
  refresh_token: string;

  @ApiProperty({ description: 'The user ID' })
  user_id: number;

  @ApiProperty({ description: 'The user email' })
  email: string;
}

export class RefreshTokenRequestDto {
  @ApiProperty({
    description:
      'Refresh token given by the backend addressed to the refresh endpoint',
  })
  refresh_token: string;
}

export class RefreshTokenResponseDto {
  @ApiProperty({ description: 'New access token' })
  access_token: string;

  @ApiProperty({ description: 'New refresh token' })
  refresh_token: string;
}

export class LogoutRequestDto {
  @ApiProperty({ description: 'Refresh token given by the backend' })
  refresh_token: string;
}

export class LogoutResponseDto {
  @ApiProperty({ description: 'Logout success message' })
  message: string;
}

// ============ BACKWARD COMPATIBILITY ============
export class LoginDto extends LoginRequestDto {}
export class TokenResponseDto extends LoginResponseDto {}
export class RefreshTokenDto extends RefreshTokenRequestDto {}
export class LogoutDto extends LogoutRequestDto {}
export class LogoutResponseDto2 extends LogoutResponseDto {}
