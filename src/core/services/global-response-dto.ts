import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GlobalResponseDto<T> {
  @ApiProperty({ description: 'Indicates if the operation was successful' })
  success: boolean;

  @ApiPropertyOptional({
    description: 'The error message, if the operation failed',
    nullable: true,
  })
  error?: string | null;

  @ApiPropertyOptional({
    description: 'The data returned from the operation, if any',
    nullable: true,
  })
  data?: T;
}
